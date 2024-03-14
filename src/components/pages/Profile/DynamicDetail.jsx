import {Box, Button, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {SERVER_URL} from "../../../constants";
import Cookies from "js-cookie";

const DynamicDetail = ({id, url, title, fields}) => {
    const [data, setData] = useState({});
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if (!id) return;
        axios.get(`${SERVER_URL}/${url}/${id}`, {
            headers: {Authorization: `Bearer ${Cookies.get('jwt')}`},
        }).then((response) => {
            console.log("Data Fetched", response.data)
            setData(response.data)
        }).catch(error => {
            console.error('Data Fetch Failed:', error);
        });
    }, [id])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const submit = () => {
        setEdit(!edit)
        console.log("Submitting:", data)
        axios.put(`${SERVER_URL}/${url}/${id}`, data,{
            headers: {Authorization: `Bearer ${Cookies.get('jwt')}`},
        }).then((response) => {
            console.log("Data Updated")
        }).catch(error => {
            console.error('Data Update Failed:', error);
        });
    }

    const details = fields.map(field => ({
        label: field.label,
        name: field.name,
        value: data[field.name],
    }))

    return (
        <Box className="profile-info-contents" sx={{display: 'flex', alignItems: 'center', marginBottom: 1}}>
            <Typography variant="h2" className="profile-topbox" sx={{marginRight: 1}}>{title}</Typography>
            {edit
                ?
                details.map((detail, index) => (
                    <TextField
                        key={index} label={detail.label} value={detail.value || ''} name={detail.name} onChange={handleChange}
                    />
                ))
                :
                details.map((detail, index) => (
                    <Box key={index} className="profile-box">
                        <Typography variant="span" className="profile-details">{detail.label}: </Typography>
                        {detail.value}
                    </Box>
                ))
            }
            {edit && <Button onClick={submit}>Save</Button>}
            <Button onClick={() => setEdit(!edit)}>{edit ? "Cancel" : "Edit"}</Button>
        </Box>
    )
}
export default DynamicDetail
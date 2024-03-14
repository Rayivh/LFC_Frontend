import {Box, Button, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {SERVER_URL} from "../../../constants";
import Cookies from "js-cookie";

const DynamicDetailArray = ({id, url, title, fields}) => {
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if (!id) return;
        axios.get(`${SERVER_URL}/${url}/${id}`, {
            headers: { Authorization: `Bearer ${Cookies.get('jwt')}` },
        }).then((response) => {
            console.log("Data Fetched", response.data)
            setData(response.data);
        }).catch(error => {
            console.error('Fetch Failed:', error);
        });
    }, [id])

    const handleChange = (dataIndex, fieldName, value) => {
        setData(prevData =>
            prevData.map((item, itemIndex) =>
                itemIndex === dataIndex ? { ...item, [fieldName]: value } : item
            )
        );
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

    // Unlike the other fields, 'details' here is mapped with a sub-object in data
    const getDetails = (element) => {
        return fields.map(field => ({
            label: field.label,
            name: field.name,
            value: element[field.name],
        }));
    }

    return (
        <Box className="profile-info-contents" sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <Typography variant="h2" className="profile-topbox" sx={{ marginRight: 1 }}>{title}</Typography>
            {data.map((element, index) => (
                <React.Fragment key={index}>
                    {edit
                        ?
                        getDetails(element, index).map((detail, detailIndex) => (
                            <TextField
                                key={detailIndex}
                                label={detail.label}
                                value={detail.value || ''}
                                name={detail.name}
                                onChange={(event) => handleChange(index, detail.name, event.target.value)}
                            />
                        ))
                        :
                        getDetails(element).map((detail, index) => (
                            <Box key={index} className="profile-box">
                                <Typography variant="span" className="profile-details">{detail.label}: </Typography>
                                {detail.value}
                            </Box>
                        ))
                    }
                </React.Fragment>
            ))}
            {edit && <Button onClick={submit}>Save</Button>}
            <Button onClick={() => setEdit(!edit)}>{edit ? "Cancel" : "Edit"}</Button>
        </Box>
    );
};

export default DynamicDetailArray;



import {Box, Button, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
import {SERVER_URL} from "../../../constants";
import Cookies from "js-cookie";

const DynamicDetailDate = ({data, onChange, title, fields}) => {
    // No UseEffect, as data is loaded through AuthProvider / data is volunteer record
    const [edit, setEdit] = useState(false);

    const handleChange = (name, value) => {
        onChange(current => ({
            ...current,
            [name]: value instanceof dayjs ? value.format('MM-DD-YYYY') : value  // Adjust format as needed
        }));
    };

    const submit = () => {
        setEdit(!edit)
        console.log("Submitting:", data)
        axios.put(`${SERVER_URL}/volunteer/${data.volunteer_id}`, data,{
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
        type: field.type
    }))

    return (
        <Box className="profile-info-contents" sx={{display: 'flex', alignItems: 'center', marginBottom: 1}}>
            <Typography variant="h2" className="profile-topbox" sx={{marginRight: 1}}>{title}</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            {
                edit ?
                    details.map((detail, index) => (
                        detail.type && detail.type === 'date' ?
                            <DatePicker
                                key={index}
                                label={detail.label}
                                value={dayjs(detail.value) || null}
                                onChange={(newValue) => handleChange(detail.name, newValue)}
                            />
                            :
                            <TextField
                                key={index}
                                label={detail.label}
                                value={detail.value || ''}
                                name={detail.name}
                                onChange={(e) => handleChange(detail.name, e.target.value)}
                            />
                    ))
                    :
                    details.map((detail, index) => (
                        <Box key={index} className="profile-box">
                            <Typography variant="span" className="profile-details">{detail.label}: </Typography>
                            {detail.type === 'date' ? dayjs(detail.value).format('MM-DD-YYYY') : detail.value}
                        </Box>
                    ))
            }
            </LocalizationProvider>
            {edit && <Button onClick={submit}>Save</Button>}
            <Button onClick={() => setEdit(!edit)}>{edit ? "Cancel" : "Edit"}</Button>
        </Box>
    )
}
export default DynamicDetailDate

import React, {useState, useEffect, useCallback} from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import {Box, Button, Typography} from "@mui/material";
import axios from 'axios';
import Cookies from 'js-cookie';
import Form1 from "./Form 1";
import Form2 from "./Form 2";
import Form3 from "./Form 3";
import Form4 from "./Form 4";
import Form5 from "./Form 5";
import {FormProvider, useForm} from "react-hook-form";
import {SERVER_URL} from '../../../constants'

const PDF = () => {
    const { userId } = useParams();
    const methods = useForm();

    const onSubmit = async (data) => {
        console.log(data); // This will log the form data to the console

        const application = {userId:userId, form: data}
        const token = Cookies.get('jwt');
        console.log(token)

        const response = await axios.post(`${SERVER_URL}/${userId}/volunteer/`, application, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Form1/>
                <Form2/>
                <Form3/>
                <Form4/>
                <Form5/>

                <Button variant="contained" color="primary" type="submit">
                    Apply
                </Button>
            </form>
        </FormProvider>
    );
};
export default PDF;

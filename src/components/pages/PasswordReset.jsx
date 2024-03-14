import React, {useState, useEffect, useCallback} from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import {Box, Button, Typography} from "@mui/material";
import axios from 'axios';
import Cookies from 'js-cookie';

import {SERVER_URL} from '../../constants'

const PDF = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({
        user_id: userId,
        volunteer_id: "",
        email:"",
        username: "" ,
        role: ""
    });

    const onSubmit = async (data) => {
        console.log(data); // This will log the form data to the console

        const application = {userId:userId, form: data}
        const token = Cookies.get('jwt');
        console.log(token)

    };

    const resetPwd = async () => {
        const user = {userId:userId, password: password}

        const response = await axios.patch(`${SERVER_URL}/${userId}/volunteer/`, user, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
    }

    return (
        <Button onClick={() => resetPwd()}>Reset Password</Button>
    );
};
export default PDF;

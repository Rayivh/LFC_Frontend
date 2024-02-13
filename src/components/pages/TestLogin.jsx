import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import axios from 'axios';
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";


const TestLogin = () => {
    let navigate = useNavigate(); // Step 2: Initialize useNavigate

    let SERVER_URL = 'http://localhost:3001';

    const [creds, setCreds] = useState({username:"", password:""});
    const[isAuthenticated, setAuth] = useState(false);

    const editChange = (event) => {
        setCreds({...creds,  [event.target.name]:event.target.value})
    }

    const login = async (creds) => {
        console.log("Login Clicked", creds);
        try {
            const response = await axios.post(`${SERVER_URL}/login`, creds);
            const jwtToken = response.headers['authorization'].split(' ')[1];

            Cookies.set('jwt', jwtToken, { expires: 1 });
            console.log("Token saved to Cookies")

            setAuth(true); // Update authentication state
            navigate(`/profile/${response.data.user_id}`); // Step 3: Redirect to profile page
        } catch (error) {
            console.error('Login failed:', error);
        }
    };


    if (isAuthenticated) {
        return (
            <>
                <Typography>Authenticated!</Typography>
            </>
        )

    } else {
        return (
            <>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <Typography>Username</Typography>
                        <TextField
                            required
                            label="username"
                            name="username"
                            value={creds.username}
                            onChange={editChange}
                        />
                        <Typography>Password</Typography>
                        <TextField
                            required
                            label="password"
                            name="password"
                            value={creds.password}
                            type="password"
                            autoComplete="current-password"
                            onChange={editChange}
                        />

                    </div>
                </Box>
                <Button onClick={() => login(creds)}>Login</Button>
            </>
        )
    }
}

export default TestLogin
import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import Cookies from 'js-cookie';

const TestLogin = () => {
    let SERVER_URL = 'http://localhost:3001';

    const [user, setUser] = useState({username:"", password:""});

    const editChange = (event) => {
        setUser({...user,  [event.target.name]:event.target.value})
        console.log(user)
    }

    const login = async () => {
        console.log("Login Clicked", user)
        try {
            const response = await fetch(`${SERVER_URL}/user/login`,
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(user)
                }
            )
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const token = data.token
            Cookies.set('jwt', token, {expires: 1});
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    const verify = async () => {
        const token = Cookies.get('jwt');
        if (!token) {
            console.error('No token found');
            return;
        }
        try {
            const response = await fetch(`${SERVER_URL}/user/verified`,{
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Verification success:', data);
        } catch (error) {
            console.error('Verification failed:', error);
        }
    }

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
                        value={user.username}
                        onChange={editChange}
                    />
                    <Typography>Password</Typography>
                    <TextField
                        required
                        label="password"
                        name="password"
                        value={user.password}
                        type="password"
                        autoComplete="current-password"
                        onChange={editChange}
                    />

                </div>
            </Box>
            <Button onClick={login}> Login </Button>
            <Button onClick={verify}> Verify </Button>
        </>
    )
}

export default TestLogin
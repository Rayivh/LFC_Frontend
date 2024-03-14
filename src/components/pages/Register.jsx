import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import {Box, Button, TextField, Typography} from "@mui/material";
import axios from 'axios';

const Register = () => {
    const SERVER_URL = 'http://localhost:3001';
    const navigate = useNavigate();

    const [user, setUser] = useState(
        {
            username: "",
            email: "",
            password: "",
            pwd_confirm: "",
        });
    const editChange = (event) => {
        setUser({...user,  [event.target.name]:event.target.value})
    }

    const register = async (user) => {
        console.log("Register Clicked", user);
        try {
            await axios.post(`${SERVER_URL}/user/`, user);
            navigate(`/login`); // Step 3: Redirect to login page
        } catch (err) {
            console.error('Register failed:', err);
        }
    };

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
                <Typography>Email</Typography>
                <TextField
                    required
                    label="email"
                    name="email"
                    value={user.email}
                    onChange={editChange}
                />
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
                <Typography>Confirm Password</Typography>
                <TextField
                    required
                    label="pwd_confirm"
                    name="pwd_confirm"
                    value={user.pwd_confirm}
                    type="password"
                    autoComplete="current-password"
                    onChange={editChange}
                />
            </div>
            </Box>
            <Button onClick={() => register(user)}>Register</Button>
        </>
    );
};

export default Register;

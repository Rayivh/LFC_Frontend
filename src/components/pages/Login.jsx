import React, { useState } from 'react';
import { useAuth } from '../HOC/AuthProvider';
import { Box, Button, TextField, Typography } from '@mui/material';

const Login = () => {
    const { isAuthenticated, login } = useAuth(); // Destructure login and isAuthenticated from context
    const [creds, setCreds] = useState({ username: "", password: "" });

    const editChange = (event) => {
        setCreds({ ...creds, [event.target.name]: event.target.value });
    };

    if (isAuthenticated) {
        return <Typography>Authenticated!</Typography>;
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
        );
    }
};

export default Login;
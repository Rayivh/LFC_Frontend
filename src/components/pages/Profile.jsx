import React, {useState, useEffect, useCallback} from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import {Button, Typography} from "@mui/material";
import axios from 'axios';
import Cookies from 'js-cookie';

const Profile = () => {
    const SERVER_URL = 'http://localhost:3001';
    const token = Cookies.get('jwt');
    const { userId } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({ user_id: "", username: "" });

    // Wrap fetchProfile with useCallback to memoize it
    const fetchProfile = useCallback(async () => {
        if (!token) {
            console.error('No token found');
            navigate('/login');
            return;
        }

        try {
            const response = await axios.get(`${SERVER_URL}/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Profile success:', response.data);
            return response.data

        } catch (error) {
            console.error('Profile fetch failed:', error);
            navigate('/login');
        }
    }, [token, userId, navigate]); // Dependencies of fetchProfile

    useEffect(() => {
        fetchProfile().then(data => setUser({ user_id: data.user_id, username: data.username }));

    }, [token, fetchProfile]);


    const deleteUser = async () => {
        try {
            await axios.delete(`${SERVER_URL}/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Delete Success');
            Cookies.set('jwt', null)
            navigate('/');

        } catch (error) {
            console.error('Delete failed:', error);
            navigate('/');
        }
    }

    function logout() {
        console.log('Logged out');
        Cookies.set('jwt', null)
        navigate('/');
    }

    return (
        <>
            <Typography>User ID: {user.user_id}</Typography>
            <Typography>Username: {user.username}</Typography>
            <Button onClick={() => deleteUser()}>Delete User</Button>
            <Button onClick={() => logout()}>Logout</Button>
        </>
    );
};

export default Profile;

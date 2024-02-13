import React, {useState, useEffect, useCallback} from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import { Typography } from "@mui/material";
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

    }, [token, fetchProfile]); // Now fetchProfile is a dependency

    // Adjusted condition to check for username to render user data
   return (
        <>
            <Typography>User ID: {user.user_id}</Typography>
            <Typography>Username: {user.username}</Typography>
        </>
    );
};

export default Profile;

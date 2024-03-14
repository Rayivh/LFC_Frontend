import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {SERVER_URL} from "../../constants";

const AuthContext = createContext(undefined);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate(); // Used for navigation after login
    const [user, setUser] = useState({}); // Stores user data
    const [volunteer, setVolunteer] = useState({}); // Stores user data
    const [isAuthenticated, setAuth] = useState(false); // Tracks if the user is authenticated
    const jwt = Cookies.get('jwt')

    const login = async (creds) => {
        console.log("Login Clicked", creds);
        try {
            const response = await axios.post(`${SERVER_URL}/login`, creds);
            const jwtToken = response.headers['authorization'].split(' ')[1];

            Cookies.set('jwt', jwtToken, { expires: 1 }); // Save JWT to cookies
            console.log("Token saved to Cookies");

            // fetch user details using the jwtToken and update the user state
            setUser({ id: response.data.user_id });
            setAuth(true);
            navigate(`/profile`);
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    const logout = () => {
        Cookies.remove('jwt');
        setUser(null);
        setAuth(false);
        navigate('/login');
    };

    useEffect(() => {
        if (!jwt) {
            // If there's no JWT or user ID is not defined, don't attempt to fetch user data
            console.log('No JWT found or user ID is not available.', jwt);
        } else {
            axios.get(`${SERVER_URL}/token`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }).then(response => {
                console.log('Token Authenticated:', response.data);
                setUser(response.data);
                setAuth(true);

            }).catch(error => {
                console.error('failed:', error);
            });
        }
    }, [jwt]);

    useEffect(() => {
        if (isAuthenticated && user.id) {
            // The context has finished loading, and you can safely access `user` and other context values
            console.log('Context Loaded, user id:', user.id);
            // Perform any actions that depend on context data here
            axios.get(`${SERVER_URL}/user/${user.id}`, {
                headers: {Authorization: `Bearer ${jwt}`}
            }).then(response => {
                setUser(current => ({ ...current, ...response.data }));

                // Retrieve Volunteer Data
                axios.get(`${SERVER_URL}/volunteer/${response.data.volunteer_id}`, {
                    headers: {Authorization: `Bearer ${jwt}`}
                }).then(r => {
                    setVolunteer(current => ({ ...current, ...r.data }));
                    console.log(r.data)
                }).catch(error => {
                    console.error('Volunteer Fetch failed:', error);
                });

            }).catch(error => {
                console.error('User Fetch failed:', error);
            });
        }
    }, [isAuthenticated, jwt]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user, setUser, volunteer, setVolunteer}}>
            {children}
        </AuthContext.Provider>
    );
};
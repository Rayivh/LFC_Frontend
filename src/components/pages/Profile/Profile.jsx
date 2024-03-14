import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from "@mui/material";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAuth } from "../../HOC/AuthProvider";
import {SERVER_URL} from "../../../constants";
import ProfileSection from "./ProfileSection";

const Profile = () => {
    const jwt = Cookies.get('jwt');
    const navigate = useNavigate();
    const { user, volunteer, setVolunteer, isAuthenticated, logout} = useAuth();
    const [pwd, setPwd] = useState({password:""})

    const editPwd = (event) => {
        setPwd({...pwd,  [event.target.name]:event.target.value})
    }

    const resetPwd = async () => {
        try {
            console.log('Update Success');
        } catch (error) {
            console.error('Update failed:', error);
            navigate('/');
        }
    }

    const deleteUser = async () => {
        axios.delete(`${SERVER_URL}/user/${user.id}`, {
            headers: {Authorization: `Bearer ${jwt}`},
        }).then(() => {
            console.log('Delete Success');
            Cookies.remove('jwt');
            navigate('/');
        }).catch(error => {
            console.error('Delete failed:', error);
            navigate('/');
        })
    }

    useEffect(() => {
        if (isAuthenticated && volunteer.em_contact_id) {
            // Retrieve Volunteer Data
            axios.get(`${SERVER_URL}/contact/${volunteer.em_contact_id}`, {
                headers: {Authorization: `Bearer ${jwt}`}
            }).then(response => {
                // setVolunteer(current => ({ ...current, ...r.data }));
                console.log(response.data)
            }).catch(error => {
                console.error('Fetch failed:', error);
            });
        }
    }, [isAuthenticated, jwt]);



    if (!isAuthenticated) {
        // Assuming user being null or undefined means data is still loading
        return <Typography>Loading user profile...</Typography>;
    } else{
        return (
            <>
                <Typography>User ID: {user.id}</Typography>
                <Typography>Volunteer ID: {user.volunteer_id}</Typography>
                <Typography>Email: {user.email}</Typography>
                <Typography>Username: {user.username}</Typography>
                <Typography>Role: {user.role}</Typography>
                <Button onClick={() => deleteUser()}>Delete Account</Button>
                <Button onClick={logout}>Logout</Button>
                <TextField
                    required
                    label="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={editPwd}
                />
                <Button onClick={() => resetPwd()}>Reset Password</Button>
                <Button component="a" href={`/profile/apply`}>Apply</Button>

                <section>
                    <div className="profile-container">
                        <div className="profile-contents">
                            <div className="profile-img-container">
                                <div className="profile-img-fixed-container">
                                    {volunteer.image_filename
                                        ? <Typography>User Image: {volunteer.image_filename}</Typography>
                                        : <Typography>User Image Alt</Typography>
                                    }
                                </div>
                            </div>

                            <div className="profile-info">
                                <div className="profile-info-container">
                                    <ProfileSection volunteer={volunteer} user={user} setVolunteer={setVolunteer}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
};

export default Profile;

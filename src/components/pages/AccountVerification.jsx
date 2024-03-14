import React, {useState, useEffect, useCallback} from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import {Button, TextField, Typography} from "@mui/material";
import axios from 'axios';
import Cookies from 'js-cookie';
import {SERVER_URL} from '../../constants'


const AccountVerification = () => {
    const verified = false
    const token = Cookies.get('jwt');

    if (verified) {
        return (
            <>
                <Typography variant='h1'>Verification Success</Typography>
                <Typography>Your account has been verified. Please use your credentials to <a href="/login">login</a></Typography>
            </>
        )
    } else {
        return (
            <>
                <Typography variant='h2'>Account Verification</Typography>
                <Typography>An email has been sent to your email address containing an activation link. Please click on
                    the link to activate your account. If you do not click the link your account will remain inactive
                    and you will not receive further emails. If you do not receive the email within a few minutes,
                    please check your spam folder.!</Typography>
            </>
        )
    }
}
export default AccountVerification;
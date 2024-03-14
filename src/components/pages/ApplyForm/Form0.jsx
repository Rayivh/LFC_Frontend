// Form1.js
import './webform.css'
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const Form0 = () => {
    // Access form context
    const { control } = useFormContext();

    return (
        <div>
            <Controller
                name="firstName" // Use dot notation for nested objects if needed, e.g., "user.firstName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField {...field} label="First Name" variant="outlined" />
                )}
            />
            {/* Add more fields as needed */}
        </div>
    );
};

export default Form0;

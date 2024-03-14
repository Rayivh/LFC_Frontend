import {Controller} from "react-hook-form";
import TextField from "@mui/material/TextField";
import React from "react";

const TextFormField = ({name, label, control}) => {
    return (
        <Controller
            name={name} // Use dot notation for nested objects if needed, e.g., "user.firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField {...field} label={label} variant="outlined" />
            )}
        />
    )
}

export default TextFormField
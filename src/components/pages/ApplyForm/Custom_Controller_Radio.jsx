import React from 'react';
import { Controller } from 'react-hook-form';
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';

const RadioFormField = ({ name, label, control }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <FormControl component="fieldset">
                    <FormLabel component="legend">{label}</FormLabel>
                    <RadioGroup {...field} row>
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            )}
        />
    );
};

export default RadioFormField;
import {Controller} from "react-hook-form";
import React from "react";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";

const DateFormField = ({name, label, control}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
                name={name}
                control={control}
                defaultValue={null}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <DatePicker
                        label={label}
                        value={value}
                        onChange={onChange}
                        slotProps={{ textField: { variant: 'outlined' } }}
                    />
                )}
            />
        </LocalizationProvider>
    )
}

export default DateFormField
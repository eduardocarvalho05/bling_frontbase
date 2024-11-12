import React from 'react';
import TextField from '@mui/material/TextField';

const Input = ({ type = 'text', name, value,
    onChange, label, variant = 'outlined', ...props }) => {
    return (
        <TextField
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            label={label}
            variant={variant}
            fullWidth
            margin="normal"
            {...props}
        />
    );
};

export default Input;

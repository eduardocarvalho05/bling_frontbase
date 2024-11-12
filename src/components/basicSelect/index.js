import React from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { StyledSelect } from './style'; 


const BasicSelect = ({
  name,
  label,
  value,
  options,
  onChange
}) => {
  return (
    <StyledSelect
      name={name}
      value={value}
      onChange={onChange}
      displayEmpty
      inputProps={{ 'aria-label': label }}
    >
      <option value="" disabled>{label}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default BasicSelect;

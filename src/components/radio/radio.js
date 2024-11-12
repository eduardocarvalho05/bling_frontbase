import React from 'react';
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Typography } from '@mui/material';

const RadioButtonsGroup = ({ value, onChange, options, label }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        name="radio-buttons-group"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio 
                sx={{ 
                  color: '#2ecc71',
                  '&.Mui-checked': { 
                    color: '#27ae60',
                  }
                }}
              />
            }
            label={<Typography style={{ fontSize: '16px' }}>{option.label}</Typography>}
            sx={{ 
              marginLeft: '-12px', 
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonsGroup;

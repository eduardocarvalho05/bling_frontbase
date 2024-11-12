import styled from 'styled-components';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)`
  color: white;
  background-color: #2ecc71;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #27ae60;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 600px) {
    padding: 6px 12px;
    font-size: 14px;
  }
  @media (max-width: 400px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const StyledMenu = styled(Menu)`
  @media (max-width: 600px) {
    width: 80vw; 
  }
  @media (max-width: 400px) {
    width: 90vw; 
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  color: #2ecc71;
  &:hover {
    background-color: lightgray;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaSearch } from 'react-icons/fa';

export const ContainerClientes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 600px) {
    height: auto;

    h1 {
      font-size: 18px;
    }

    h2 {
      font-size: 18px;
    }

  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #2ecc71;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 20px;
  transition: color 0.3s ease, text-shadow 0.3s ease;

  &:hover {
    color: #27ae60;
  }
`;

export const Title2 = styled.h2`
  text-align: start;
  width: 100%;
  color: #2ecc71;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 40px;
  transition: color 0.3s ease, text-shadow 0.3s ease;

  &:hover {
    color: #27ae60;
  }

  @media (max-width: 900px) {

  }

    @media (max-width: 600px) {
    
  }

`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 16px;
  width: 100%;
  max-width: 1600px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  align-self: flex-start;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Garante 2 colunas de largura igual em telas menores */
  }
`;

export const FormContainer2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 16px;
  width: 100%;
  max-width: 1600px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  align-self: flex-start;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr; /* Garante 2 colunas de largura igual em telas menores */
  }
`;

export const StyledInput = styled(TextField)`
  width: 100%; 
`;

export const StyledIconSearch = styled(FaSearch)`
  color: #2ecc71;
  transition: color 0.3s ease;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #27ae60;
  }
`

export const FormContainerAuto = styled.div`
  display: grid;
  gap: 16px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 20px;
`;

export const StyledButton = styled(Button)`
  width: 150px;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 4px;
  background-color: #2ecc71;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #27ae60;
  }
`;

export const StyledButtonCancel = styled(Button)`
  width: 150px;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 4px;
  background-color: white;
  color: #2ecc71;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid #2ecc71; 

  &:hover {
    background-color: #ecf0f1;
  }
`;

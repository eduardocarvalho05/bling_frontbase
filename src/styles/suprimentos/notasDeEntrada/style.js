import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaSearch } from 'react-icons/fa';

export const ContainerNotaFiscal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  width: 100%;
  height: auto;
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
  margin-bottom: 24px;
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

export const FormContainerNotaFiscal1 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr 1fr; 
  gap: 16px;
  width: 100%;
  max-width: 1600px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  align-self: flex-start;
  position  : relative;

  @media (max-width: 600px) {
    width: 100%;
    align-self: flex-start;
    display: grid;
    grid-template-columns:  1fr; 
  }
`;

export const FormContainerNotaFiscal2 = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr; 
  gap: 16px;
  width: 100%;
  max-width: 1600px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  align-self: flex-start;

  @media (max-width: 600px) {
    width: 100%;
    align-self: flex-start;
    display: grid;
    grid-template-columns:  1fr;
  }
`;

export const FormContainerNotaFiscal3 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; 
  gap: 16px;
  width: 100%;
  max-width: 1600px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  align-self: flex-start;
  position  : relative;

  @media (max-width: 600px) {
    width: 100%;
    align-self: flex-start;
    display: grid;
    grid-template-columns:  1fr; 
  }
`;

export const FormContainerNotaFiscal4 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
  gap: 16px;
  width: 100%;
  max-width: 1600px;
  padding: 20px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  align-self: flex-start;
  position  : relative;

  @media (max-width: 600px) {
    width: 100%;
    align-self: flex-start;
    display: grid;
    grid-template-columns:  1fr 1fr; 
  }
  
`;

export const FormContainerNotaFiscal5 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  gap: 16px;
  width: 100%;
  max-width: 1600px;
  /* padding: 20px; */
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  align-self: flex-start;
  position  : relative;

  @media (max-width: 600px) {
    width: 100%;
    align-self: flex-start;
    display: grid;
    grid-template-columns:  1fr; 
  }
  
`;

export const StyledInput = styled(TextField)`
  width: 100%;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 1rem; /* Ajuste o tamanho da fonte conforme necessário */
  color: #333; /* Cor do texto */
  margin-bottom: 4px; /* Espaçamento abaixo do label */
  text-align: left; /* Alinha o texto à esquerda */
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

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: start;
  }
`;

export const StyledButton = styled(Button)`
  width: 220px;
  padding: 8px 16px;
  font-size: 0.740rem;
  font-weight: 700;
  border-radius: 4px;
  background-color: #2ecc71;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #27ae60;
  }

  @media (max-width: 600px) {
    width: 180px;
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

export const filterContas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ; 
  gap: 16px;
  width: 100%;
  max-width: 1600px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  align-self: flex-start;

  @media (max-width: 600px) {
    width: 100%;
    align-self: flex-start;
    display: grid;
    grid-template-columns:  1fr;
  }
`

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 2fr)); /* Ajuste o tamanho mínimo e máximo das colunas conforme necessário */
  gap: 16px;
  width: 100%;
  max-width: 1600px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  align-self: flex-start;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;  /* Em telas pequenas, exibe apenas uma coluna */
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 12px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #e0e0e0;

  p {
    padding: 6px;
    margin: 4px 0;
    font-size: 24px;
    color: #444444;
    font-weight: bold;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

  }
`;
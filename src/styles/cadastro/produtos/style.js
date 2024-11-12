import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const ContainerProdutos = styled.div`
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
  margin-top: 30px;
  margin-bottom: 30px;
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
  @media (max-width: 600px) {
    margin-top: 20px;
    margin-left: 0px;
  }

`;

export const FormContainerProdutos1 = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  gap: 16px;
  width: 70%;
  max-width: 1600px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  align-self: flex-start;

  @media (max-width: 600px) {
    width: 100%;
    align-self: flex-start;
    display: grid;
    grid-template-columns:  1fr; 
  }


`;

export const FormContainerProdutos2 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr; 
  gap: 16px;
  width: 100%;
  max-width: 1600px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  align-self: flex-start;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .div1 {
    display: flex;
    flex-direction: row;

    @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    }
  }

  .upload-container {
    width: 210px;
    margin-bottom: 60px;
    position: relative; 

    @media (max-width: 600px) {
      margin-left: 40px; 
      margin-top: 20px;
      margin-bottom: 70px;
    }
  }

  .radio {
    position: absolute; 
    top: 66%; 
    left: 50%; 

    @media (max-width: 1410px) {
      left: 54%; 
    }

    @media (max-width: 992px) {
      left: 56%; 
    }

    @media (max-width: 600px) {
      top: 80%;
      left: 50%; 
    }

    @media (max-width: 426px) {
      top: 100%; 
      left: 16%; 
      margin-top: 10px;
    }
  }

`;

export const FormContainerProdutos3 = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  gap: 16px;
  width: 100%;
  max-width: 1600px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  align-self: flex-start;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .row1 {
    display: grid;
    grid-template-columns: 1fr; 
  }
  .row2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 16px;
  }

  .categoria {
    display: grid;
    grid-template-columns: 1fr; 
    width: 100%;
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

export const InputRadio = styled.div`
  position: absolute;
  left: 17%;
  bottom: 30%;

  @media (max-width: 600px) {
    left: 70%;
    bottom: 102%;
  }
`

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
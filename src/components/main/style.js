import styled from 'styled-components'

export const Title = styled.h1`
  color: #2ecc71;
  margin-bottom: 50px; 
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem; 
  font-weight: 700; 
  text-align: center;
  transition: color 0.3s ease, text-shadow 0.3s ease; 

  &:hover {
    color: #27ae60; 
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh; 
  width: 100%;
`
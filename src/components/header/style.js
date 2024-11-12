import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ecf0f1;
  color: #fff;
  padding: 12px;
  width: 100%;
  height: 12vh;

  h1 {
    margin: 0;
    font-size: 24px;
  }

  > * {
    margin: 5px; 
  }

 
  /* @media (max-width: 1200px) {
    height: 10vh;
    
    h1 {
      font-size: 22px;
    }

    > * {
      margin: 4px;
    }
  } */

  /* @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    padding: 12px;

    h1 {
      font-size: 20px;
    }

    > * {
      margin: 3px;
    }
  } */

  @media (max-width: 600px) {
    height: auto;

    h1 {
      font-size: 18px;
    }

    > * {
      margin: 2px;
    }
  }
`;

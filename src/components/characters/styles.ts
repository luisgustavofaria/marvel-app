import styled from 'styled-components';

export const ContainerDiv = styled.div`
  background-color: #dcdcff;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const DivInput = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  max-width: 400px;

  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  border-radius: 10px;
  padding-left: 10px;
  height: 40px;
  font-size: 1.25rem;

  ::placeholder {
    color: #9a9a9a;
  }

  :focus-visible {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #48ff00;
  width: 300px;
  height: 400px;
  border-radius: 10px;
`;

export const CardImage = styled.div`
  height: 80%;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const CardFooter = styled.div`
  display: flex;
  height: 20%;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  border-radius: 0 0 10px 10px;

  strong {
    font-size: 1.5rem;
  }

  div {
    height: 32px;
  }
`;

import styled from 'styled-components';
import { MagnifyingGlass, Star } from 'phosphor-react';

const ContainerDiv = styled.div`
  background-color: #dcdcff;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const DivInput = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  max-width: 400px;

  display: flex;
  align-items: center;
`;

const Input = styled.input`
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

const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #48ff00;
  width: 300px;
  height: 400px;
  border-radius: 10px;
`;

const CardImage = styled.div`
  height: 80%;
`;
const CardFooter = styled.div`
  display: flex;
  height: 20%;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  border-radius: 0 0 10px 10px;

  strong {
    font-size: 1.5rem;
  }
`;

export default function CardList() {
  const Cards = [
    {
      id: 1,
      character: 'Hulk',
      img: 'Hulk',
    },
  ];

  return (
    <ContainerDiv>
      <DivInput>
        <Input type="text" placeholder="Characters Search" />
        <Button>
          <MagnifyingGlass size={32} />
        </Button>
      </DivInput>

      <ContainerCards>
        <Card>
          <CardImage></CardImage>
          <CardFooter>
            <strong>Iron Man</strong>
            {<Star size={32} /> || (
              <Star size={32} color="#ffe357" weight="fill" />
            )}
          </CardFooter>
        </Card>
      </ContainerCards>
    </ContainerDiv>
  );
}

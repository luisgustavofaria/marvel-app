import { useState } from 'react';
import styled from 'styled-components';
import { MagnifyingGlass, Star } from 'phosphor-react';
import Image from 'next/image';
import ironMan from '../../../public/iron-man.png';

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

  img {
    width: 100%;
    height: 100%;
  }
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

  div {
    height: 32px;
  }
`;

interface ICard {
  id: number;
  nameCharacter: string;
  imgCharacter: any;
  isFavorited: boolean;
}

export default function CardList() {
  const cards: ICard[] = [
    {
      id: 1,
      nameCharacter: 'Iron Man',
      imgCharacter: ironMan,
      isFavorited: true,
    },
    {
      id: 2,
      nameCharacter: 'Hulk',
      imgCharacter: ironMan,
      isFavorited: true,
    },
    {
      id: 3,
      nameCharacter: 'Spider Man',
      imgCharacter: ironMan,
      isFavorited: false,
    },
  ];

  const [favoriteCards, setFavoriteCards] = useState<ICard[]>(cards);

  const handleFavoriteToggle = (id: Number) => {
    const newFavoriteCards: ICard[] = favoriteCards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          isFavorited: !card.isFavorited,
        };
      }
      return card;
    });
    setFavoriteCards(newFavoriteCards);
  };

  console.log(favoriteCards);
  return (
    <ContainerDiv>
      <DivInput>
        <Input type="text" placeholder="Characters Search" />
        <Button>
          <MagnifyingGlass size={32} />
        </Button>
      </DivInput>

      <ContainerCards>
        {favoriteCards.map((card) => (
          <Card key={card.id}>
            <CardImage>
              <Image src={card.imgCharacter} alt="" priority />
            </CardImage>
            <CardFooter>
              <strong>{card.nameCharacter}</strong>
              <div onClick={() => handleFavoriteToggle(card.id)}>
                {card.isFavorited ? (
                  <Star size={32} color="#ffe357" weight="fill" />
                ) : (
                  <Star size={32} />
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </ContainerCards>
    </ContainerDiv>
  );
}

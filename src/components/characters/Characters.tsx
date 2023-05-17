import { useState } from 'react';
import { MagnifyingGlass, Star } from 'phosphor-react';
import Image from 'next/image';
import ironMan from '../../../public/iron-man.png';
import {
  ContainerDiv,
  DivInput,
  Input,
  Button,
  ContainerCards,
  Card,
  CardFooter,
  CardImage,
} from '../characters/styles';

interface ICard {
  id: number;
  nameCharacter: string;
  imgCharacter: any;
  isFavorited: boolean;
}

export default function Characters() {
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

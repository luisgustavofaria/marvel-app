import { useEffect, useState } from "react";
import { MagnifyingGlass, Star } from "phosphor-react";
import Image from "next/image";
import {
  ContainerDiv,
  DivInput,
  Input,
  Button,
  ContainerCards,
  Card,
  CardFooter,
  CardImage,
} from "../characters/styles";
import { getCharacters } from "../../pages/api/marvels";

export interface ICard {
  id: number;
  character: string;
  name: string;
  thumbnail: any;
  isFavorited: boolean;
}

export default function Characters() {
  const [characters, setCharacters] = useState<ICard[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      if (data) {
        setCharacters(data);
      }
    };

    fetchCharacters();
  }, []);

  const handleFavoriteToggle = (id: number) => {
    const newFavoriteCards = characters.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          isFavorited: !card.isFavorited,
        };
      }
      return card;
    });
    setCharacters(newFavoriteCards);
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
        {characters.map((character) => (
          <Card key={character.id}>
            <CardImage>
              <Image
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                width={200}
                height={200}
              />
            </CardImage>
            <CardFooter>
              <strong>{character.name}</strong>
              <div onClick={() => handleFavoriteToggle(character.id)}>
                {character.isFavorited ? (
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

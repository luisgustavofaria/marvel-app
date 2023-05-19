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
  const [searchCharacters, setSearchCharacters] = useState<string>("");

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const data = await getCharacters();
      if (data) {
        setCharacters(data);
      }
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

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

  const handleSearchCharacters = () => {
    if (!searchCharacters) {
      // Se a pesquisa estiver vazia, restaura os personagens originais
      fetchCharacters();
    } else {
      // Filtra os personagens com base no nome pesquisado
      const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchCharacters.toLowerCase())
      );
      setCharacters(filteredCharacters);
    }
  };

  return (
    <ContainerDiv>
      <DivInput>
        <Input
          type="text"
          placeholder="Characters Search"
          value={searchCharacters}
          onChange={(e) => setSearchCharacters(e.target.value)}
        />
        <Button>
          <MagnifyingGlass size={32} onClick={handleSearchCharacters} />
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

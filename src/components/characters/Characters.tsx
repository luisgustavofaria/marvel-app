import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MagnifyingGlass, Star, X } from 'phosphor-react';
import Image from 'next/image';
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
import { getCharacters, getCharacterById } from '../../pages/api/marvels';

export interface ICard {
  id: number;
  character: string;
  name: string;
  thumbnail: any;
  isFavorited: boolean;
}

export default function Characters() {
  const [characters, setCharacters] = useState<ICard[]>([]);
  const [searchCharacters, setSearchCharacters] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false); //trocar MagnifyingGlass por X
  const router = useRouter();

  // useEffect(() => {
  //   fetchCharacters();
  // }, []);

  // const fetchCharacters = async () => {
  //   try {
  //     const data = await getCharacters();
  //     if (data) {
  //       setCharacters(data);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching characters:', error);
  //   }
  // };
  const fetchCharacterById = async (name: string) => {
    try {
      const data = await getCharacterById(name);
      if (data) {
        setCharacters(data);
      }
    } catch (error) {
      console.error('Error fetching characters:', error);
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
    if (searchCharacters.length >= 3) {
      fetchCharacterById(searchCharacters);
      setIsSearching(!isSearching);
    }
  };

  const handleX = () => {
    //fetchCharacters();
    setIsSearching(!isSearching);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCharacters(e.target.value);
    if (
      e.target.value === '' ||
      e.target.value.length > 1 ||
      e.target.value.length < 1
    ) {
      setIsSearching(false);
      //fetchCharacters();
    }
  };

  return (
    <ContainerDiv>
      <DivInput>
        <Input
          type="text"
          placeholder="Characters Search"
          value={searchCharacters}
          onChange={handleInputChange}
        />
        <Button>
          {isSearching ? (
            <X size={32} color="#6c757d" onClick={handleX} />
          ) : (
            <MagnifyingGlass
              size={32}
              color="#6c757d"
              onClick={handleSearchCharacters}
            />
          )}
        </Button>
      </DivInput>

      <ContainerCards>
        {characters.map((character) => (
          <Card key={character.id}>
            <CardImage
              onClick={() => router.push(`/characterId/${character.id}`)}
            >
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

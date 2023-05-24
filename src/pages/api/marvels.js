import md5 from "md5";

// const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
// const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;

const ts = Date.now().toString();
const hash = md5(`${ts}${privateKey}${publicKey}`);

export const getCharacters = async () => {
  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const characters = data.data.results;
    return characters;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCharacterById = async (name) => {
  // const url = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const url = `https://gateway.marvel.com/v1/public/characters?name=${encodeURIComponent(
    name
  )}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const charactersName = data.data.results[0];
    return charactersName;
  } catch (error) {
    console.error(error);
    return null;
  }
};

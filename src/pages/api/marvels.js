import md5 from "md5";

// const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
// const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
const publicKey = "0fa8c7cfe41bdc3a99d36e82ad9e3e03";
const privateKey = "e03d768e1edf9ceb1664dbcd052f222a3222ed72";
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

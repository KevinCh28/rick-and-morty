export const getCharacters = () => {
  let api = `https://rickandmortyapi.com/api/character/?page=1`
  let data = fetch(api)
    .then(res => res.json())
  return data;
}

export const getCharacter = characterId => {
  let api = `https://rickandmortyapi.com/api/character/${characterId}`
  let data = fetch(api)
    .then(res => res.json())
  return data;
}
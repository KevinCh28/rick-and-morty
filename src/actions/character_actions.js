import { getCharacters, getCharacter } from "../components/util/character_api_util";

export const RECEIVE_CHARACTERS = "RECEIVE_CHARACTERS";
export const RECEIVE_CHARACTER = "RECEIVE_CHARACTER";

export const receiveCharacters = (characters) => ({
  type: RECEIVE_CHARACTERS,
  characters
});

export const receiveCharacter = (character) => ({
  type: RECEIVE_CHARACTER,
  character
});

export const fetchCharacters = () => dispatch => (
  getCharacters()
    .then(characters => dispatch(receiveCharacters(characters)))
);

export const fetchCharacter = (characterId) => dispatch => (
  getCharacter(characterId)
    .then(character => dispatch(receiveCharacter(character)))
);

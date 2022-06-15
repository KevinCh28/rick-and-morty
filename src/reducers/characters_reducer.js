import { RECEIVE_CHARACTERS, RECEIVE_CHARACTER } from "../actions/character_actions";

const characterReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CHARACTERS:
      return action.characters.results
    case RECEIVE_CHARACTER:
      const newState = { [action.charater.id]: action.charater };
      return Object.assign({}, newState)
    default:
      return state;
  };
};

export default characterReducer;
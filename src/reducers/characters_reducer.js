import { RECEIVE_CHARACTERS, RECEIVE_CHARACTER } from "../actions/character_actions";

const characterReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CHARACTERS:
      return action.characters.results
    case RECEIVE_CHARACTER:
      const newState = Object.assign({}, action.character)
      if (!action.character) {
        return null
      } else {
        return newState
      }
    default:
      return state;
  };
};

export default characterReducer;
import { RECEIVE_LOCATION } from "../actions/location_action";

const locationReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_LOCATION:
      const newState = action.location
      // return Object.assign(nextState, newState)
      return newState
    default:
      return state;
  };
};

export default locationReducer;
import { RECEIVE_LOCATION } from "../actions/location_action";

const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LOCATION:
      const newState = action.location
      return newState
    default:
      return state;
  };
};

export default locationReducer;
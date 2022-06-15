import { combineReducers } from "redux";
import characterReducer from "./characters_reducer";
import locationReducer from "./location_reducer";

const rootReducer = combineReducers({
  characters: characterReducer,
  locations: locationReducer,
});

export default rootReducer;
import { getLocation } from "../components/util/location_api_util";

export const RECEIVE_LOCATION = "RECEIVE_LOCATION";

export const receiveLocation = (location) => ({
  type: RECEIVE_LOCATION,
  location
});

export const fetchLocation = (url) => dispatch => (
  getLocation(url)
    .then(location => dispatch(receiveLocation(location)))
);
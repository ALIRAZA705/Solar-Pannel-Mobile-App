import {
  ADD_CLUB_VENUE_Info,
  ADD_CLUB_VENUE_INFO_SUCCESS,
  ADD_CLUB_VENUE_INFO_FAILURE,
} from "../constants";

// for add club venue
export const addClubVenueInfo = (data) => {
  return {
    type: ADD_CLUB_VENUE_Info,
    payload: data,
  };
};
export const addClubVenueInfoSuccess = (payload) => {
  return {
    type: ADD_CLUB_VENUE_INFO_SUCCESS,
    payload,
  };
};
export const addClubVenueInfoFailure = (payload) => {
  return {
    type: ADD_CLUB_VENUE_INFO_FAILURE,
    payload,
  };
};

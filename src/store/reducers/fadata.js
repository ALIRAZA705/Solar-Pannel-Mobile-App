import {
  ADD_CLUB_VENUE_Info,
  ADD_CLUB_VENUE_INFO_SUCCESS,
  ADD_CLUB_VENUE_INFO_FAILURE,
} from "../constants";

const INIT_STATE = {
  clubVenueAddData: [],
  loadingClubVenueAddData: true,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    // for add club venue  info
    case ADD_CLUB_VENUE_Info:
      return {
        ...state,
        loadingClubVenueAddData: true,
      };
    case ADD_CLUB_VENUE_INFO_SUCCESS:
      return {
        ...state,
        loadingClubVenueAddData: false,
        clubVenueAddData: action.payload,
      };
    case ADD_CLUB_VENUE_INFO_FAILURE:
      return {
        ...state,
        loadingClubVenueAddData: false,
        clubVenueAddData: "Error in  getting Club Data",
      };
    default:
      return state;
  }
};

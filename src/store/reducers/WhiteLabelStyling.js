import {
  WHITE_LABEL_STYLING_INFO,
  WHITE_LABEL_STYLING_INFO_SUCCESS,
  WHITE_LABEL_STYLING_INFO_FAILURE,
} from "../constants/WhiteLabelStyling";

const INIT_STATE = {
  loadingWhiteLabelStyle: true,
  whiteLabelStyle: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    // for add club venue  info
    case WHITE_LABEL_STYLING_INFO:
      return {
        ...state,
        loadingWhiteLabelStyle: true,
      };
    case WHITE_LABEL_STYLING_INFO_SUCCESS:
      return {
        ...state,
        loadingWhiteLabelStyle: false,
        whiteLabelStyle: action.payload,
      };
    case WHITE_LABEL_STYLING_INFO_FAILURE:
      return {
        ...state,
        loadingWhiteLabelStyle: false,
        whiteLabelStyle: "Error in  getting Club Data",
      };
    default:
      return state;
  }
};

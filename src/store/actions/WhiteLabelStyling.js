import {
  WHITE_LABEL_STYLING_INFO,
  WHITE_LABEL_STYLING_INFO_SUCCESS,
  WHITE_LABEL_STYLING_INFO_FAILURE,
} from "../constants/WhiteLabelStyling";

// for add club venue
export const whiteLabelStylingInfo = (data) => {
  return {
    type: WHITE_LABEL_STYLING_INFO,
    payload: data,
  };
};
export const whiteLabelStylingInfoSuccess = (payload) => {
  return {
    type: WHITE_LABEL_STYLING_INFO_SUCCESS,
    payload,
  };
};
export const whiteLabelStylingInfoFailure = (payload) => {
  return {
    type: WHITE_LABEL_STYLING_INFO_FAILURE,
    payload,
  };
};

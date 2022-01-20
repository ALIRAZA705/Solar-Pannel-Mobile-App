import { combineReducers } from "redux";

import FaData from "./fadata";
import WhiteLabelStyling from "./WhiteLabelStyling";
const reducers = combineReducers({
  FaData,
  WhiteLabelStyling,
});

export default reducers;

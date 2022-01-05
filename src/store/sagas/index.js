import { all } from "redux-saga/effects";

import addClubVenue from "./AddClubVenue";

export default function* rootSaga(getState) {
  yield all([addClubVenue()]);
}

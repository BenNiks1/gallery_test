import { FETCHED_PHOTOS } from "./types";

const initialState = {
  photos: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_PHOTOS:
      return { ...state, photos: action.payload };
    default:
      return state;
  }
};

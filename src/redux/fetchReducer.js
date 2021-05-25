import { CURRENT_USER, FETCHED_PHOTOS, NEW_CLIENT } from "./types";

const initialState = {
  photos: [],
  newClient: [],
  currentUser: [],
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_PHOTOS:
      return { ...state, photos: action.payload };
    case NEW_CLIENT:
      return { ...state, newClient: action.payload };
    case CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

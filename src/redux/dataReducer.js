import { FETCHED_PHOTOS, NEW_CLIENT, PHOTO, SET_ACTIVE_KEY, SET_PAGE } from "./types";

const initialState = {
  photos: [],
  photo:[],
  newClient: [],
  activeKey: "new",
  page: 1,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_PHOTOS:
      return { ...state, photos: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_ACTIVE_KEY:
      return { ...state, activeKey: action.payload };
    case NEW_CLIENT:
      return { ...state, newClient: action.payload };
    case PHOTO:
      return {...state, photo: action.payload}
    default:
      return state;
  }
};

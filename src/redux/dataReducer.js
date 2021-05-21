import { FETCHED_PHOTOS, SET_ACTIVE_KEY, SET_PAGE } from "./types";

const initialState = {
  photos: [],
  activeKey:'new',
  page:1
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_PHOTOS:
      return { ...state, photos: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload}
    case SET_ACTIVE_KEY:
      return {...state, activeKey:action.payload}
    default:
      return state;
  }
};

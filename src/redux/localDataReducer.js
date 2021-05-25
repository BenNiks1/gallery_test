import { IS_AUTHORIZED, SET_ACTIVE_KEY, SET_PAGE } from "./types";

const initialState = {
  activeKey: "new",
  page: 1,
  isAuthorized: false,
};

export const localDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_ACTIVE_KEY:
      return { ...state, activeKey: action.payload };
    case IS_AUTHORIZED:
      return { ...state, isAuthorized: action.payload };
    default:
      return state;
  }
};

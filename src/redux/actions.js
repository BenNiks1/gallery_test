import { FETCHED_PHOTOS, SET_ACTIVE_KEY, SET_PAGE } from "./types";

export const fetchPhotos = (category, page) => {
  return async (dispatch) => {
    const response = await fetch(
      `/api/photos?page=${page !== null ? page : "1"}&limit=10&${category}=true`
    );
    const json = await response.json();
    dispatch({ type: FETCHED_PHOTOS, payload: json });
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

export const setActiveKey = (key) => {
  return {
    type:SET_ACTIVE_KEY,
    payload:key
  }
}
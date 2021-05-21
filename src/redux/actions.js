import { FETCHED_PHOTOS } from "./types";

export const fetchPhotos = (category) => {
  return async (dispatch) => {
    const response = await fetch(
      `/api/photos?page=1&limit=10&${category !== null ? category : "new"}=true`
    );
    const json = await response.json();
    dispatch({ type: FETCHED_PHOTOS, payload: json });
  };
};

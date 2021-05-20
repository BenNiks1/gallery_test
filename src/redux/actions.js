import { FETCHED_PHOTOS } from "./types";

// export const fetchedPhotos = (items) => {
//   return {
//     type: FETCHED_PHOTOS,
//     payload: items,
//   };
// };

export function fetchPhotos() {
  return async (dispatch) => {
    const response = await fetch(
      "/api/photos"
    );
    const json = await response.json();
    dispatch({ type: FETCHED_PHOTOS, payload: json });
  };
}
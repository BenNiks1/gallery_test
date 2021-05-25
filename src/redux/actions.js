import axios from "axios";
import { FETCHED_PHOTOS, GET_PHOTO, NEW_CLIENT, PHOTO, SET_ACTIVE_KEY, SET_PAGE } from "./types";

export const fetchPhotos = (category, page) => {
  return async (dispatch) => {
    const response = await axios.get(
      `/api/photos?page=${page !== null ? page : "1"}&limit=15&${category}=true`
    );
    dispatch({ type: FETCHED_PHOTOS, payload: response.data });
  };
};

export const newClient = () => {
  return async (dispatch) => {
    const response = await axios.post("/api/clients", {
      name: "",
      allowedGrantTypes: ["password", "refresh_token"],
    });
    dispatch({ type: NEW_CLIENT, payload: response.data });
  };
};

export const photo = (photo) =>{
  return {
    type: PHOTO,
    payload:photo,
  }
}

// export const photo = (photoName) => {
//   return async (dispatch) => {
//     const response = await axios.get(`/media/${photoName}`)
//     dispatch({type:PHOTO,payload:response})
//   }
// }

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

export const setActiveKey = (key) => {
  return {
    type: SET_ACTIVE_KEY,
    payload: key,
  };
};

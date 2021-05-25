import axios from "axios";
import { FETCHED_PHOTOS, NEW_CLIENT, SET_ACTIVE_KEY, SET_PAGE } from "./types";

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

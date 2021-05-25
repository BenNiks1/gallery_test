import axios from "axios";
import {
  FETCHED_PHOTOS,
  FETCHED_USERS,
  NEW_CLIENT,
  SET_ACTIVE_KEY,
  SET_PAGE,
} from "./types";

export const fetchPhotos = (category, page) => {
  return async (dispatch) => {
    const response = await fetch(
      `/api/photos?page=${page !== null ? page : "1"}&limit=15&${category}=true`
    );
    const json = await response.json();
    dispatch({ type: FETCHED_PHOTOS, payload: json });
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    const response = await fetch("/api/users");
    const json = await response.json();
    dispatch({ type: FETCHED_USERS, payload: json });
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

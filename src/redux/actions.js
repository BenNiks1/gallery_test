import axios from "axios";
import {
  CURRENT_USER,
  FETCHED_PHOTOS,
  IS_AUTHORIZED,
  NEW_CLIENT,
  SET_ACTIVE_KEY,
  SET_PAGE,
} from "./types";

export const fetchPhotos = (category, page) => async (dispatch) => {
  const response = await axios.get(
    `/api/media_objects?page=${page !== null ? page : "1"}&limit=15&${category}=true`
  );
  dispatch({ type: FETCHED_PHOTOS, payload: response.data });
};


export const newClient = () => async (dispatch) => {
  const response = await axios.post("/api/clients", {
    name: "",
    allowedGrantTypes: ["password", "refresh_token"],
  });
  dispatch({ type: NEW_CLIENT, payload: response.data });
};

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const currentUser = (item) => ({
  type: CURRENT_USER,
  payload: item,
});

export const isAuthorized = (value) => ({
  type: IS_AUTHORIZED,
  payload: value,
});

export const setActiveKey = (key) => ({
  type: SET_ACTIVE_KEY,
  payload: key,
});

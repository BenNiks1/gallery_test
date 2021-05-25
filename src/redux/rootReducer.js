import { combineReducers } from "redux";
import { fetchReducer } from "./fetchReducer";
import { localDataReducer } from "./localDataReducer";

export const rootReducer = combineReducers({
  fetchedData: fetchReducer,
  localData: localDataReducer,
});

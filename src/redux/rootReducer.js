import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";

export const rootReducer = combineReducers({
  fetchedData: dataReducer,
});

import { combineReducers } from "redux";
import userReducer from "./userReducer";
import handleReducer from "./handleReducer";
import userNewReducer from "./userNewReducer";

export const rootReducer = combineReducers({
  userReducer,
  handleReducer,
  userNewReducer,
});

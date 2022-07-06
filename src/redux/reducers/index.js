import { combineReducers } from "redux";
import AuthorizationReducer from "./AuthorizationReducer";
import clickerReducer from "./clickerReducer"

export const rootReducer = combineReducers({
  authorization: AuthorizationReducer, 
  clicker: clickerReducer
});


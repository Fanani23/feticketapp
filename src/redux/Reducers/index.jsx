import { combineReducers } from "redux";
import flightReducer from "./Flight";
import userReducer from "./User";

const rootReducers = combineReducers({
  user: userReducer,
  flight: flightReducer,
});

export default rootReducers;

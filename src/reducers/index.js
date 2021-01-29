import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { ticketsReducer } from "./ticketsReducer";

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
  app: appReducer,
});

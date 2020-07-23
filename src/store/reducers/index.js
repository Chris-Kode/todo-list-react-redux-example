import { combineReducers } from "redux";
import tasks from "./taskReducer";

const rootReducer = combineReducers({
  store: tasks,
});

export default rootReducer;

import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer, window.devToolsExtension());

export default store;

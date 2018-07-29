import { createStore } from "redux";
import { TodoReducer } from "./reducers";

const store = createStore(TodoReducer);

export default store;

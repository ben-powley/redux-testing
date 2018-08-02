import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import todoReducer from "./reducers/todoReducer";

const store = createStore(
    todoReducer,
    compose(
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

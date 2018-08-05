import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import todoReducer from "./reducers/todoReducer";
import LogRocket from "logrocket";

const store = createStore(
    todoReducer,
    compose(
        applyMiddleware(logger, LogRocket.reduxMiddleware()),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

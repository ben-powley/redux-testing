import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";
import blogReducer from "./reducers/blogReducer";
import LogRocket from "logrocket";

const store = createStore(
    combineReducers({
        posts: blogReducer
    }),
    compose(
        applyMiddleware(logger, LogRocket.reduxMiddleware()),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

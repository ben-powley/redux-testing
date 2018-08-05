import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";

// LogRocket

// import LogRocket from "logrocket";
// import setupLogRocketReact from "logrocket-react";

// LogRocket.init("4vhuzz/redux-testing");
// setupLogRocketReact(LogRocket);

// // Register Dev
// LogRocket.identify("0", {
//     name: "Ben Powley",
//     email: "ben.powley97@gmail.com",

//     // Add your own custom user variables here, ie:
//     subscriptionType: "dev"
// });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

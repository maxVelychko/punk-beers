import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import appReducer from "./reducers";
import { fetchBeers } from "./actions";

import App from "./components/App.js";

const loggerMiddleware = createLogger();
const store = createStore(
    appReducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(fetchBeers());
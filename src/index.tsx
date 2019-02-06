import * as React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { reducer } from "./reducers";
import { fetchBeers } from "./actions";

import App from "./components/App";

const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
);

store.dispatch(fetchBeers());

render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'),
);
import { REQUEST_BEERS, RECEIVE_BEERS } from "../actions";

const initialState = {
    beers: [],
    fetching: false,
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_BEERS:
            return { ...state, fetching: true };
        case RECEIVE_BEERS:
            return { ...state, beers: action.data, fetching: false };
        default:
            return state;
    }
};

export default app;
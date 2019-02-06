import { REQUEST_BEERS, RECEIVE_BEERS, ActionTypes } from "../types";

interface Beer {
    id: number;
    name: string;
}

interface State {
    beers: Beer[];
    fetching: boolean;
}

const initialState: State = {
    beers: [],
    fetching: false,
};

const reducer = (state: State = initialState, action: ActionTypes) => {
    switch (action.type) {
        case REQUEST_BEERS:
            return { ...state, fetching: true };
        case RECEIVE_BEERS:
            return { ...state, beers: action.payload, fetching: false };
        default:
            return state;
    }
};

export { reducer, State, Beer };
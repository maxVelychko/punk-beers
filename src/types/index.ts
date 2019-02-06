import { ThunkAction } from "redux-thunk";

export const REQUEST_BEERS = "REQUEST_BEERS";
export const RECEIVE_BEERS = "RECEIVE_BEERS";

interface RequestBeersAction {
    type: typeof REQUEST_BEERS
}

interface ReceiveBeersAction {
    type: typeof RECEIVE_BEERS,
    payload: object[],
}

export type ActionTypes = RequestBeersAction | ReceiveBeersAction | ThunkAction;
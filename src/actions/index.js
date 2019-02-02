import "babel-polyfill";
import fetch from "cross-fetch";

export const REQUEST_BEERS = "REQUEST_BEERS";
function requestBeers() {
    return {
        type: REQUEST_BEERS,
    }
}

export const RECEIVE_BEERS = 'RECEIVE_BEERS';
function receiveBeers(json) {
    return {
        type: RECEIVE_BEERS,
        data: json,
    }
}

export function fetchBeers() {
    return dispatch => {
        dispatch(requestBeers());
        return fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=10`)
            .then(response => response.json())
            .then(json => { dispatch(receiveBeers(json)) });
    }
}
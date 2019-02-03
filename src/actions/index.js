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
        return fetch(`https://api.punkapi.com/v2/beers?page=3&per_page=10`)
            .then(response => response.json())
            .then(json => { dispatch(receiveBeers(json)) });
    }
}

export function searchBeers(beerName) {
    return dispatch => {
        dispatch(requestBeers());
        return fetch(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`)
            .then(response => response.json())
            .then(json => { dispatch(receiveBeers(json)) });
    }
}

export function requestBeersByPage(page) {
    return dispatch => {
        dispatch(requestBeers());
        return fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
            .then(response => response.json())
            .then(json => { dispatch(receiveBeers(json)) });
    }
}
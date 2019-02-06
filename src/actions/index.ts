import fetch from "cross-fetch";
import { Dispatch } from "redux";

const REQUEST_BEERS = "REQUEST_BEERS";
function requestBeers() {
    return {
        type: REQUEST_BEERS,
    }
}

const RECEIVE_BEERS = 'RECEIVE_BEERS';
function receiveBeers(data: []) {
    return {
        type: RECEIVE_BEERS,
        payload: data,
    }
}

export function fetchBeers() {
    return (dispatch: Dispatch) => {
        dispatch(requestBeers());
        return fetch(`https://api.punkapi.com/v2/beers?page=3&per_page=10`)
            .then(response => response.json())
            .then(json => { dispatch(receiveBeers(json)) });
    }
}

export function searchBeers(beerName: string) {
    return (dispatch: Dispatch) => {
        dispatch(requestBeers());
        return fetch(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`)
            .then(response => response.json())
            .then(json => { dispatch(receiveBeers(json)) });
    }
}

export function requestBeersByPage(page: number) {
    return (dispatch: Dispatch) => {
        dispatch(requestBeers());
        return fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
            .then(response => response.json())
            .then(json => { dispatch(receiveBeers(json)) });
    }
}
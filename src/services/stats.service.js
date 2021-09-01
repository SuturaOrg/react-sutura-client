import config from '../config';
import {handleResponse} from "../_helpers";

export const statsService = {
    get,
};

function get() {

    const requestOptions = {
        method: 'GET',
    };

    return fetch(`${config.apiUrl}/stats/`, requestOptions)
        .then(handleResponse)
        .then(statsPayload => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return Promise.resolve(statsPayload);
        });
}



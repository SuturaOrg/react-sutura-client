import config from '../config';
import {authHeader, handleResponse} from '../_helpers';

export const statsService = {
    get,
};

function get() {

    const requestOptions = {
        method: 'GET',
        headers:authHeader()
    };

    return fetch(`${config.apiUrl}/stats/`, requestOptions)
        .then(handleResponse)
        .then(statsPayload => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return Promise.resolve(statsPayload);
        });
}



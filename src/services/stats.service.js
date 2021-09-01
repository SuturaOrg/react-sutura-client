import config from '../config';
import {authHeader} from '../_helpers';

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


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            // if (response.status === 401) {
            //     // auto logout if 401 response returned from api
            //     logout();
            //     window.location.reload(true);
            // }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

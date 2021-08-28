import config from '../config';
import {authHeader} from '../_helpers';

export const contributionService = {
    create,
};

function create(data) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(data)
    };

    return fetch(`${config.apiUrl}/contributions/`, requestOptions)
        .then(handleResponse)
        .then(loanPayload => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes

            return loanPayload;
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

import config from '../config';
import {authHeaderFormData} from '../_helpers';

export const fileService = {
    create,
};

function create(data) {
    const requestOptions = {
        method: 'POST',
        headers: authHeaderFormData(),
        body: data
    };

     return fetch(`${config.apiUrl}/upload/`, requestOptions)
        .then(handleResponse)
        .then(file => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return Promise.resolve(file.url);
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

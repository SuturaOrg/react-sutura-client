import config from '../config';
import {authHeaderFormData} from '../_helpers';

export const fileService = {
    upload,
};

function upload(file) {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
        "file",
        file,
    );
    const requestOptions = {
        method: 'POST',
        headers: authHeaderFormData(),
        body: formData
    };

    return fetch(`${config.apiUrl}/upload/`, requestOptions)
        .then(handleResponse)
        .then(filePayload => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return Promise.resolve(filePayload);
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

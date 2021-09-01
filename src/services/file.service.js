import config from '../config';
import {authHeaderFormData, handleResponse} from '../_helpers';
import {userService} from "./user.service";

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


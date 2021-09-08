import config from '../config';
import {authHeader, handleResponse} from '../_helpers';

export const mailService = {
    create,
    resetpwd
};

function create(data) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(true),
        body: JSON.stringify(data)
    };

    return fetch(`${config.apiUrl}/mail/send`, requestOptions)
        .then(handleResponse)
        .then(emailPayload => {
            return emailPayload;
        });
}

function resetpwd(email) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(true)
    };

    return fetch(`${config.apiUrl}/auth/resetpwd?email=${email}`, requestOptions)
        .then(handleResponse)
        .then(returnPayload => {
            return returnPayload;
        });
}
import config from '../config';
import {authHeader, handleResponse} from '../_helpers';

export const mailService = {
    create,
};

function create(data) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(data)
    };

    return fetch(`${config.apiUrl}/mail/send`, requestOptions)
        .then(handleResponse)
        .then(emailPayload => {
            return emailPayload;
        });
}

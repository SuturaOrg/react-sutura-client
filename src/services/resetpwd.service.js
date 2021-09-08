import config from '../config';
import {authHeader, handleResponse} from '../_helpers';

export const resetpwdService = {
    resetpwd,
};

function resetpwd(data) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(true)
    };

    return fetch(`${config.apiUrl}/api/auth/resetpwd?email=${data}`, requestOptions)
        .then(handleResponse)
        .then(returnPayload => {
            return returnPayload;
        });
}

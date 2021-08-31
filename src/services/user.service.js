import config from '../config';
import {authHeader} from '../_helpers';

export const userService = {
    login,
    signup,
    logout,
    getAll,
    getUserMe
};

function login(data) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };

    return fetch(`${config.apiUrl}/auth/signin`, requestOptions)
        .then(handleResponse)
        .then(signinPayload => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('signinPayload', JSON.stringify(signinPayload));

            return signinPayload;
        });
}

function signup(data) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };

    return fetch(`${config.apiUrl}/auth/signup/user`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return login(data);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
        });
}

function getUserMe(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`${config.apiUrl}/user/me`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('signinPayload');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
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

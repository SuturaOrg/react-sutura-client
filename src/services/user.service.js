import config from '../config';
import {authHeader, handleResponse} from '../_helpers';

export const userService = {
    login,
    signup,
    logout,
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

    return fetch(`${config.apiUrl}/user/studentInfos`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('userInfos', JSON.stringify(user));
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('signinPayload');
    localStorage.removeItem('userInfos');

}



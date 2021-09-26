import config from '../config';
import {authHeader, handleResponse} from '../_helpers';

export const userService = {
    login,
    signup,
    logout,
    getUserMe,
    patchInfos,
    updatePwd

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
          localStorage.setItem('accessToken', signinPayload.accessToken);
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
            return user;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
        });
}

function getUserMe(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`${config.apiUrl}/user/infos`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('userInfos', JSON.stringify(user));
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfos');

}

function patchInfos(data,id,userType) {
    const requestOptions = {
        method: 'PATCH',
        headers: authHeader(),
        body: JSON.stringify(data)
    };

    return fetch(`${config.apiUrl}/${userType}/${id}`, requestOptions)
        .then(handleResponse)
        .then(patchInfosPayload => {
            return patchInfosPayload;
        });
}


function updatePwd(data) {
    const requestOptions = {
        method: 'PATCH',
        headers: authHeader(),
        body: JSON.stringify(data)
    };

    return fetch(`${config.apiUrl}/auth/updatepwd`, requestOptions)
        .then(handleResponse)
        .then(updatePwdPayload => {
            return updatePwdPayload;
        });
}




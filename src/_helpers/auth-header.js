export function authHeader() {
    // return authorization header with jwt token
    let accessToken = localStorage.getItem('accessToken');

    if (accessToken ) {
        return { 'Authorization': 'Bearer ' + accessToken,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    } else {
        return {};
    }
}

export function authHeaderFormData() {
    // return authorization header with jwt token
    let accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        return { 'Authorization': 'Bearer ' + accessToken,
        };
    } else {
        return {};
    }
}

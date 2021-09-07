export function authHeader(publicRoute) {
    // return authorization header with jwt token
    let accessToken = localStorage.getItem('accessToken');

    if (publicRoute || (!publicRoute && accessToken)) {
        return {
            'Authorization': 'Bearer ' + accessToken,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    } else {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    }
}

export function authHeaderFormData() {
    // return authorization header with jwt token
    let accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        return {
            'Authorization': 'Bearer ' + accessToken,
        };
    } else {
        return {};
    }
}

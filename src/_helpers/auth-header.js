export function authHeader() {
    // return authorization header with jwt token
    let signinPayload = JSON.parse(localStorage.getItem('signinPayload'));

    if (signinPayload && signinPayload.accessToken) {
        return { 'Authorization': 'Bearer ' + signinPayload.accessToken,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    } else {
        return {};
    }
}

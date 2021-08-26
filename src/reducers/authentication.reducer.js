import {userConstants} from '../_constants';

let signinPayload = JSON.parse(localStorage.getItem('signinPayload'));
const initialState = signinPayload ? {
    loggedIn: true,
    user: signinPayload.user,
    accessToken: signinPayload.accessToken
} : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.signinPayload.user,
                accessToken: action.signinPayload.accessToken,
            };
        case userConstants.LOGIN_FAILURE:
            return {};

        case userConstants.SIGNUP_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.SIGNUP_SUCCESS:
            return {
                loggedIn: true,
                user: action.signupPayload.user,
                accessToken: action.signupPayload.accessToken,
            };
        case userConstants.SIGNUP_FAILURE:
            return {};

        case userConstants.LOGOUT:
            return {};

        default:
            return state
    }
}

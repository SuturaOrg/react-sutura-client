import {userConstants} from '../_constants';
let accessToken = localStorage.getItem('accessToken');
const initialState = accessToken ? {
    loggedIn: true,
} : {};
export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
            };
        case userConstants.LOGIN_FAILURE:
            return {};

        case userConstants.SIGNUP_REQUEST:
            return {
                loggingIn: true,
            };
        case userConstants.SIGNUP_SUCCESS:
            return {
            };
        case userConstants.SIGNUP_FAILURE:
            return {};

        case userConstants.LOGOUT:
            return {};

        default:
            return state
    }
}

import { userConstants } from '../_constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    signup,
    logout,
    getAll
};

function login(data) {
    return dispatch => {
        dispatch(request({ data }));

        userService.login(data)
            .then(
                signinPayload => {
                    dispatch(success(signinPayload));
                    dispatch(alertActions.clear());
                    history.push('/page-profile');
                   // window.location.reload();
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(signinPayload) { return { type: userConstants.LOGIN_SUCCESS, signinPayload } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}


function signup(data) {
    data.rememberMe=true;
    return dispatch => {
        dispatch(request({ data }));

        userService.signup(data)
            .then(
                signupPayload => {
                    dispatch(success(signupPayload));
                    dispatch(login(data));
                    //window.location.reload();

                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.SIGNUP_REQUEST, user } }
    function success(signupPayload) { return { type: userConstants.SIGNUP_SUCCESS, signupPayload } }
    function failure(error) { return { type: userConstants.SIGNUP_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

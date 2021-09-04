import {userConstants} from '../_constants';
import {userService} from '../services';
import {alertActions} from './';
import {history} from '../_helpers';
import {user} from '../reducers/user.reducer';

export const userActions = {
    login,
    signup,
    logout,
    getInfo,
    patchInfo,
    patchPwd
};

function login(data) {
    return dispatch => {
        dispatch(request({data}));

        userService.login(data)
            .then(
                signinPayload => {
                    dispatch(success());
                    dispatch(alertActions.clear());
                    history.push('/page-profile');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) {
        return {type: userConstants.LOGIN_REQUEST, user}
    }

    function success() {
        return {type: userConstants.LOGIN_SUCCESS}
    }

    function failure(error) {
        return {type: userConstants.LOGIN_FAILURE, error}
    }
}


function signup(data) {
    data.rememberMe = true;
    return dispatch => {
        dispatch(request({data}));

        userService.signup(data)
            .then(
                signupPayload => {
                    dispatch(success(signupPayload));
                    history.push('/registration-confirmation');
                    //window.location.reload();

                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) {
        return {type: userConstants.SIGNUP_REQUEST, user}
    }

    function success(signupPayload) {
        return {type: userConstants.SIGNUP_SUCCESS, signupPayload}
    }

    function failure(error) {
        return {type: userConstants.SIGNUP_FAILURE, error}
    }
}

function logout() {
    userService.logout();
    return {type: userConstants.LOGOUT};
}

function getInfo() {
    return dispatch => {
        dispatch(request());

        userService.getUserMe()
            .then(
                userSummary => {
                    dispatch(success(userSummary));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() {
        return {type: userConstants.GETINFO_REQUEST}
    }

    function success(userSummary) {
        return {type: userConstants.GETINFO_SUCCESS, userSummary}
    }

    function failure(error) {
        return {type: userConstants.GETINFO_FAILURE, error}
    }
}

function patchInfo(data) {
    return dispatch => {
        dispatch(request());
        userService.getUserMe()
            .then(
                user => {
                    userService.patchInfos(data, user.id)
                        .then((user) => {
                                dispatch(success());
                                dispatch(alertActions.success("Vos modifications ont bien été enregistrées"))
                            },
                            error => {
                                dispatch(failure(error));
                                dispatch(alertActions.error(error));
                            })
                }
            );
    };

    function request() {
        return {type: userConstants.PATCH_REQUEST}
    }

    function success() {
        return {type: userConstants.PATCH_SUCCESS}
    }

    function failure(error) {
        return {type: userConstants.PATCH_FAILURE, error}
    }
}

function patchPwd(data) {
    return dispatch => {
        dispatch(request());
        userService.updatePwd(data).then((user) => {
                dispatch(success());
                dispatch(alertActions.success("Mot de passse bien enregistré"))
            },
            error => {
                dispatch(failure(error));
                dispatch(alertActions.error("Le mot de passe actuel que vous avez fourni n'est pas correct"));
            }
        )
    };

    function request() {
        return {type: userConstants.UPDATEPWD_REQUEST}
    }

    function success() {
        return {type: userConstants.UPDATEPWD_SUCCESS}
    }

    function failure(error) {
        return {type: userConstants.UPDATEPWD_FAILURE, error}
    }
}

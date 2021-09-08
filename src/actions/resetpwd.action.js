import {resetpwdConstants} from '../_constants';
import {alertActions} from './';
import {resetpwdService} from "../services/resetpwd.service";

export const mailActions = {
    resetpwd,

};

function resetpwd(data) {

    return dispatch => {


        dispatch(request(data));
        resetpwdService.resetpwd(data)
            .then(
                resetpwdPayload => {
                    dispatch(success(resetpwdPayload));
                    dispatch(alertActions.success("Votre mot de passe a été réinitialisé avec succès!\nVeuillez consulter votre boîte mail."));
                    //history.push('/page-profile');
                    // window.location.reload();
                },
                error => {
                    dispatch(failure(error));
                    //TODO show custom error message
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(data) {
        return {type: resetpwdConstants.RESETPWD_CREATE_REQUEST, data}
    }

    function success(resetpwdPayload) {
        return {type: resetpwdConstants.RESETPWD_CREATE_SUCCESS, resetpwdPayload}
    }

    function failure(error) {
        return {type: resetpwdConstants.RESETPWD_CREATE_FAILURE, error}
    }
}

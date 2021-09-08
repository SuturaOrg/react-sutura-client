import {mailConstants} from '../_constants';
import {alertActions} from './';
import {mailService} from "../services/mail.service";

export const mailActions = {
    create,
    resetpwd

};

function create(data) {

    return dispatch => {


        dispatch(request(data));
        mailService.create(data)
            .then(
                mailPayload => {
                    dispatch(success(mailPayload));
                    dispatch(alertActions.success("Message envoyé avec succès"));
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
        return {type: mailConstants.MAIL_CREATE_REQUEST, data}
    }

    function success(mailPayload) {
        return {type: mailConstants.MAIL_CREATE_SUCCESS, mailPayload}
    }

    function failure(error) {
        return {type: mailConstants.MAIL_CREATE_FAILURE, error}
    }
}
function resetpwd(email) {

    return dispatch => {
        dispatch(request(email));
        mailService.resetpwd(email)
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
        return {type: mailConstants.MAIL_RESETPWD_REQUEST, data}
    }

    function success(resetpwdPayload) {
        return {type: mailConstants.MAIL_RESETPWD_SUCCESS, resetpwdPayload}
    }

    function failure(error) {
        return {type: mailConstants.MAIL_RESETPWD_FAILURE, error}
    }
}

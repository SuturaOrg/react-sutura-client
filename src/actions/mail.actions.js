import {mailConstants} from '../_constants';
import {alertActions} from './';
import {mailService} from "../services/mail.service";

export const mailActions = {
    create,

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

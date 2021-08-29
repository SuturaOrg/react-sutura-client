import { contributionConstants } from '../_constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../_helpers';
import {contributionService} from "../services/contribution.service";

export const contributionActions = {
   create
};

function create(data) {
    return dispatch => {
        dispatch(request({ data }));

        contributionService.create(data)
            .then(
                contributionPayload => {
                    dispatch(success(contributionPayload));
                    dispatch(alertActions.success("Votre cotisation a été bien enregistrée"));
                   // history.push('/page-profile');
                   // window.location.reload();
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error("Votre cotisation n'a pas été sauvegardée à cause d'une erreur"));
                }
            );
    };

    function request(contribution) { return { type: contributionConstants.CONTRIBUTION_CREATE_REQUEST, contribution } }
    function success(contributionPayload) { return { type: contributionConstants.CONTRIBUTION_CREATE_SUCCESS, contributionPayload } }
    function failure(error) { return { type: contributionConstants.CONTRIBUTION_CREATE_FAILURE, error } }
}

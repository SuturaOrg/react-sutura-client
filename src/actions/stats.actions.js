import {statsService} from "../services/";
import {statsConstants} from "../_constants";


export const statsActions = {
    get
};
function get() {
    return dispatch => {
        dispatch(request());
            statsService.get()
                .then(
                    (statsPayload) => {
                        dispatch(success(statsPayload));
                        //  dispatch(alertActions.success("Votre cotisation a été bien enregistrée"));
                        // history.push('/page-profile');
                        // window.location.reload();
                    },
                    error => {
                        dispatch(failure(error));
                        //  dispatch(alertActions.error("Votre cotisation n'a pas été sauvegardée à cause d'une erreur"));
                    }
                );
        }



    function request() {
        return {type: statsConstants.STATS_REQUEST}
    }

    function success(statsPayload) {
        return {type: statsConstants.STATS_SUCCESS, statsPayload}
    }

    function failure(error) {
        return {type: statsConstants.STATS_FAILURE, error}
    }
}

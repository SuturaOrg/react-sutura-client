import {entityConstants} from '../_constants';
import {fileService, userService} from '../services';
import {alertActions} from './';
import {history} from '../_helpers';
import {entityService} from "../services/entity.service";

export const entityActions = {
    create
};

function create(file, data, entity) {
    console.log(file, data, entity);
    return dispatch => {
        dispatch(request(data,entity));
        fileService.upload(file).then((filePayload) => {
            data.proof=filePayload.url;
            entityService.create(data, entity)
                .then(
                    entityPayload => {
                        dispatch(success(entityPayload,entity));
                        dispatch(alertActions.success("Votre cotisation a été bien enregistrée"));
                        // history.push('/page-profile');
                        // window.location.reload();
                    },
                    error => {
                        dispatch(failure(error));
                        dispatch(alertActions.error("Votre cotisation n'a pas été sauvegardée à cause d'une erreur"));
                    }
                );
        }).catch((error)=>{
            dispatch(failure(error));
            dispatch(alertActions.error("Votre cotisation n'a pas été sauvegardée à cause d'une erreur"));
        })
    };

    function request(data, entity) {
        return {type: entityConstants.ENTITY_CREATE_REQUEST, data, entity}
    }

    function success(entityPayload, entity) {
        return {type: entityConstants.ENTITY_CREATE_SUCCESS, entityPayload, entity}
    }

    function failure(error) {
        return {type: entityConstants.ENTITY_CREATE_FAILURE, error}
    }
}


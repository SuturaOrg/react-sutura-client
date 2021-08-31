import {entityConstants} from '../_constants';
import {fileService, userService} from '../services';
import {alertActions} from './';
import {history} from '../_helpers';
import {entityService} from "../services/entity.service";
import {users} from "../reducers/users.reducer";

export const entityActions = {
    create,
    getAll
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

function getAll( entity) {
    return dispatch => {
        dispatch(request(entity));
        userService.getUserMe().then(user=>{
            entityService.getAll(entity,user.id)
                .then(
                    (entitiesPayload) => {
                       dispatch(success(entitiesPayload[0],entity,entitiesPayload[1]));
                        //  dispatch(alertActions.success("Votre cotisation a été bien enregistrée"));
                        // history.push('/page-profile');
                        // window.location.reload();
                    },
                    error => {
                        dispatch(failure(error));
                        //  dispatch(alertActions.error("Votre cotisation n'a pas été sauvegardée à cause d'une erreur"));
                    }
                );
        })


    };

    function request(entity) {
        return {type: entityConstants.ENTITY_GETALL_REQUEST, entity}
    }

    function success(entitiesPayload, entity, totalElements) {
        return {type: entityConstants.ENTITY_GETALL_SUCCESS, entitiesPayload, entity,totalElements}
    }

    function failure(error) {
        return {type: entityConstants.ENTITY_GETALL_FAILURE, error}
    }
}


import {entityConstants} from '../_constants';
import {fileService, userService} from '../services';
import {alertActions} from './';
import {history} from '../_helpers';
import {entityService} from "../services/entity.service";
import {users} from "../reducers/users.reducer";

export const entityActions = {
    create,
    getAll,
    deleteById,

};

function create(data, entity, file, getAllAfterCreate=true) {
    return dispatch => {
        function _create() {
            entityService.create(data, entity)
                .then(
                    entityPayload => {
                        dispatch(success(entityPayload));
                        dispatch(alertActions.success(getSuccessMessage(entity)));
                        getAllAfterCreate && dispatch(getAll(entity));
                        if (entity === "contributions") {
                            history.push('/contribution-confirmation');
                        }
                        if (entity === "loans") {
                            history.push('/loan-confirmation');
                        }
                        if (entity === "refunds") {
                            history.push('/refund-confirmation');
                        }
                        //history.push('/page-profile');
                        // window.location.reload();
                    },
                    error => {
                        dispatch(failure(error));
                        dispatch(alertActions.error(getErrorMessage(entity, error)));
                    }
                );
        }

        dispatch(request(data));
        file ? fileService.upload(file, entity).then((filePayload) => {
            data.proof = filePayload.url;
            _create()
        }).catch((error) => {
            dispatch(failure(error));
            dispatch(alertActions.error(getErrorMessage(entity, error)));
        }) : _create();
    };

    function request(data) {
        return {type: entityConstants.ENTITY_CREATE_REQUEST, data, entity}
    }

    function success(entityPayload) {
        return {type: entityConstants.ENTITY_CREATE_SUCCESS, entityPayload, entity}
    }

    function failure(error) {
        return {type: entityConstants.ENTITY_CREATE_FAILURE, error, entity}
    }
}

function getAll(entity) {
    return dispatch => {
        dispatch(request(entity));
        userService.getUserMe().then(user => {
            entityService.getAll(entity, user.id)
                .then(
                    (entitiesPayload) => {
                        dispatch(success(entitiesPayload[0], entity, entitiesPayload[1]));
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
        return {type: entityConstants.ENTITY_GETALL_SUCCESS, entitiesPayload, entity, totalElements}
    }

    function failure(error) {
        return {type: entityConstants.ENTITY_GETALL_FAILURE, error, entity}
    }
}

function getSuccessMessage(entity) {
    switch (entity) {
        case "contributions":
            return "Votre cotisation a été enregistrée avec succès"
        case "loans":
            return "Votre demande de d'aide a été enregistrée avec succès"
        case "refunds":
            return "Votre remboursement s'est déroulé avec succès"
        case "newsLetterEmails":
            return "Votre email a bien été enregistré"
        default :
            return "L'opération s'est bien déroulée"


    }
}

function getErrorMessage(entity, error) {
    switch (entity) {
        case "contributions":
            return "Votre cotisation n'a pas été sauvegardée:\n" + error;
        case "loans":
            return "Votre demande de d'aide n'a pas été enregistrée:\n" + error;
        case "refunds":
            return "Votre remboursement n'a pas été enregistré:\n" + error;
        case "newsLetterEmails":
            if (error.startsWith("could not execute statement")) {
                return "L'email était déjà abonné à notre newsletter"
            }
            return "Votre email n'a pas été enregistré:\n" + error;
        default :
            return "L'opération ne s'est pas bien déroulée"
    }
}

function deleteById(entity, id) {
    return dispatch => {
        dispatch(request());
        entityService.deleteById(entity, id)
            .then(
                (deletePayload) => {
                    dispatch(success(deletePayload));
                    dispatch(getAll(entity));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request() {
        return {type: entityConstants.ENTITY_DELETE_REQUEST, entity}
    }

    function success() {
        return {type: entityConstants.ENTITY_DELETE_SUCCESS, entity}
    }

    function failure(error) {
        return {type: entityConstants.ENTITY_DELETE_FAILURE, error, entity}
    }
}

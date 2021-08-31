import {entityConstants} from '../_constants';

export function entity(state = {}, action) {
    switch (action.type) {
        case entityConstants.ENTITY_CREATE_REQUEST:
            return {
                ...state,
                [action.entity + "CreateLoading"]: true
            };
        case entityConstants.ENTITY_CREATE_SUCCESS:
            return {
                ...state,
                [action.entity + "CreateLoading"]: false
            };
        case entityConstants.ENTITY_CREATE_FAILURE:
            return {};


        case entityConstants.ENTITY_GETALL_REQUEST:
            return {
                ...state,
                [action.entity + "GetAllLoading"]: true
            };
        case entityConstants.ENTITY_GETALL_SUCCESS:
            return {
                ...state,
                [action.entity+"List"]: action.entitiesPayload,
                [action.entity + "GetAllLoading"]: false,
                [action.entity + "TotalElements"]: action.totalElements
            };
        case entityConstants.ENTITY_GETALL_FAILURE:
            return {};

        default:
            return state
    }
}

import {entityConstants} from '../_constants';

export function entity(state = {}, action) {
    switch (action.type) {
        case entityConstants.ENTITY_CREATE_REQUEST:
            return {
                ...state,
                [action.entity+"CreateLoading"]:true
            };
        case entityConstants.ENTITY_CREATE_SUCCESS:
            return {
                ...state,
                [action.entity]:action.entityPayload,
                [action.entity+"CreateLoading"]:false
            };
        case entityConstants.ENTITY_CREATE_FAILURE:
            return {};

        default:
            return state
    }
}

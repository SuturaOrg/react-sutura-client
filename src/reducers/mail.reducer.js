import {mailConstants} from '../_constants';

export function mail(state = {}, action) {
    switch (action.type) {
        case mailConstants.MAIL_CREATE_REQUEST:
            return {
                ...state,
                createLoading: true
            };
        case mailConstants.MAIL_CREATE_SUCCESS:
            return {
                ...state,
                createLoading: false
            };
        case mailConstants.MAIL_CREATE_FAILURE:
            return {
                ...state,
               createLoading: false
            };


        case mailConstants.MAIL_GETALL_REQUEST:
            return {
                ...state,
                [action.mail + "GetAllLoading"]: true
            };
        case mailConstants.MAIL_GETALL_SUCCESS:
            return {
                ...state,
                [action.mail+"List"]: action.entitiesPayload,
                [action.mail + "GetAllLoading"]: false,
                [action.mail + "TotalElements"]: action.totalElements
            };
        case mailConstants.MAIL_GETALL_FAILURE:
            return {
                ...state,
                [action.mail + "CreateLoading"]: false
            };


        case mailConstants.MAIL_DELETE_REQUEST:
            return {
                ...state,
                [action.mail + "DeleteLoading"]: true
            };
        case mailConstants.MAIL_DELETE_SUCCESS:
            return {
                ...state,
                [action.mail + "DeleteLoading"]: false
            };
        case mailConstants.MAIL_DELETE_FAILURE:
            return {
                ...state,
                [action.mail + "DeleteLoading"]: false
            };
        default:
            return state
    }
}

import {resetpwdConstants} from '../_constants';

export function resetpwd(state = {}, action) {
    switch (action.type) {
        case resetpwdConstants.RESETPWD_CREATE_REQUEST:
            return {
                ...state,
                createLoading: true
            };
        case resetpwdConstants.RESETPWD_CREATE_SUCCESS:
            return {
                ...state,
                createLoading: false
            };
        case resetpwdConstants.RESETPWD_CREATE_FAILURE:
            return {
                ...state, 
               createLoading: false
            };


    //     case resetpwdConstants.RESETPWD_GETALL_REQUEST:
    //         return {
    //             ...state,
    //             [action.mail + "GetAllLoading"]: true
    //         };
    //     case resetpwdConstants.RESETPWD_GETALL_SUCCESS:
    //         return {
    //             ...state,
    //             [action.mail+"List"]: action.entitiesPayload,
    //             [action.mail + "GetAllLoading"]: false,
    //             [action.mail + "TotalElements"]: action.totalElements
    //         };
    //     case resetpwdConstants.RESETPWD_GETALL_FAILURE:
    //         return {
    //             ...state,
    //             [action.mail + "CreateLoading"]: false
    //         };


    //     case resetpwdConstants.RESETPWD_DELETE_REQUEST:
    //         return {
    //             ...state,
    //             [action.mail + "DeleteLoading"]: true
    //         };
    //     case resetpwdConstants.RESETPWD_DELETE_SUCCESS:
    //         return {
    //             ...state,
    //             [action.mail + "DeleteLoading"]: false
    //         };
    //     case resetpwdConstants.RESETPWD_DELETE_FAILURE:
    //         return {
    //             ...state,
    //             [action.mail + "DeleteLoading"]: false
    //         };
        default:
            return state
    }
}

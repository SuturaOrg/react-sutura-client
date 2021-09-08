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
            
        case mailConstants.MAIL_RESETPWD_REQUEST:
            return {
                ...state,
                resetPwdLoading: true
            };
        case mailConstants.MAIL_RESETPWD_SUCCESS:
            return {
                ...state,
                resetPwdLoading: false
            };
        case mailConstants.MAIL_RESETPWD_FAILURE:
            return {
                ...state,
                resetPwdLoading: false
            };
        default:
            return state
    }
}

import {userConstants} from '../_constants';

let userInfos = JSON.parse(localStorage.getItem('userInfos'));
const initialState = userInfos ? {
    user: userInfos,
} : {};

export function user(state = initialState, action) {
    switch (action.type) {
        case userConstants.GETINFO_REQUEST:
            return {
                loadingInfos: true,
            };
        case userConstants.GETINFO_SUCCESS:
            return {
                user: action.userSummary,
            };
        case userConstants.GETINFO_FAILURE:
            return {};

        default:
            return state
    }
}

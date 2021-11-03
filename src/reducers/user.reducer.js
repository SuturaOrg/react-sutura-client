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
        case userConstants.PATCH_REQUEST:
            return {
                patchLoading: true
            };
        case userConstants.PATCH_SUCCESS:
            return {};
        case userConstants.PATCH_FAILURE:
            return {};
        case userConstants.GETSTATS_SUCCESS:
            return {
                user: action.userStats,
            };

        default:
            return state
    }
}

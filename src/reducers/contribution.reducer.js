import {contributionConstants} from '../_constants';

export function contribution(state = {}, action) {
    switch (action.type) {
        case contributionConstants.CONTRIBUTION_CREATE_REQUEST:
            return {
                loading: true,
            };
        case contributionConstants.CONTRIBUTION_CREATE_SUCCESS:
            return {
                contribution:action.contributionPayload
            };
        case contributionConstants.CONTRIBUTION_CREATE_FAILURE:
            return {};

        default:
            return state
    }
}

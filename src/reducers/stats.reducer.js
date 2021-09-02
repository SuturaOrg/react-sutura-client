import { statsConstants } from '../_constants';

export function stats(state = {}, action) {
    switch (action.type) {
        case statsConstants.STATS_REQUEST:
            return {
                statsLoading:true
            };
        case statsConstants.STATS_SUCCESS:
            return {
                statsLoading:false,
                period: action.statsPayload.period,
                studentsCount:action.statsPayload.studentsCount,
                fundState:action.statsPayload.fundState,
                expirationDate: action.statsPayload.expirationDate

            };
        case statsConstants.STATS_FAILURE:
            return {
                statsLoading:false,
                error: action.error,
            };

        default:
            return state
    }
}

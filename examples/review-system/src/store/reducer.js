const DEFAULT_STATE = {
	reviews: {}, // Store reviews by postId
};

const reducer = ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case 'SET_REVIEW_STATUS':
			return {
				...state,
				reviews: {
					...state.reviews,
					[ action.postId ]: {
						status: action.status,
						log: action.log,
					},
				},
			};
		default:
			return state;
	}
};

export default reducer;

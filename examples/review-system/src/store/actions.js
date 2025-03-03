import apiFetch from '@wordpress/api-fetch';

export const setReviewStatus = ( postId, status, log ) => {
	return {
		type: 'SET_REVIEW_STATUS',
		postId,
		status,
		log,
	};
};

export const updateReviewStatus = ( postId, status ) => {
	return async ( { dispatch } ) => {
		// Get the current user info from the localized data
		const { currentUser } = window.reviewSystemData || {
			currentUser: { id: 0, name: '' },
		};

		const response = await apiFetch( {
			path: `/review-system/v1/review/${ postId }`,
			method: 'POST',
			data: {
				status,
				user_id: currentUser.id,
				user_name: currentUser.name,
			},
		} );

		return dispatch(
			setReviewStatus( postId, response.status, response.log )
		);
	};
};

export const clearHistory = ( postId ) => {
	return async ( { dispatch } ) => {
		const response = await apiFetch( {
			path: `/review-system/v1/review/${ postId }`,
			method: 'DELETE',
		} );

		return dispatch(
			setReviewStatus( postId, response.status, response.log )
		);
	};
};

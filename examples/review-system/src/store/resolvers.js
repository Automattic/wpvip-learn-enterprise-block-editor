import apiFetch from '@wordpress/api-fetch';
import { setReviewStatus } from './actions';

export const getReviewStatus = ( postId ) => {
	return async ( { dispatch } ) => {
		const response = await apiFetch( {
			path: `/review-system/v1/review/${ postId }`,
		} );
		return dispatch(
			setReviewStatus( postId, response.status, response.log )
		);
	};
};

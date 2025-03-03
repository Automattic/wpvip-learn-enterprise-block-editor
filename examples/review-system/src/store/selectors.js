export const getReviewStatus = ( state, postId ) => {
	return state.reviews[ postId ]?.status || '';
};

export const getReviewLog = ( state, postId ) => {
	return state.reviews[ postId ]?.log || [];
};

export const getReview = ( state, postId ) => {
	return state.reviews[ postId ] || null;
};

export const getAllReviews = ( state ) => {
	return state.reviews;
};

/* eslint-disable no-console */
const { apiFetch } = window.wp;

// Example: Fetch posts from WP REST API
export const fetchPosts = async () => {
	try {
		// GET request to fetch latest posts
		const posts = await apiFetch( {
			path: '/wp/v2/posts?per_page=3',
		} );

		return posts;
	} catch ( error ) {
		console.error( 'Error fetching from WP REST API:', error );
	}
};

export const newPost = async () => {
	try {
		const newPostResponse = await apiFetch( {
			path: '/wp/v2/posts',
			method: 'POST',
			data: {
				title: 'New post via apiFetch',
				content:
					'This post was created using the WordPress REST API and apiFetch.',
				status: 'draft',
			},
		} );
		return newPostResponse;
	} catch ( error ) {
		console.error( 'Error creating new post:', error );
	}
};

/* eslint-disable no-console, import/no-unresolved */
// Import WordPress Interactivity store and moduleOne
import { store } from '@wordpress/interactivity';
import { moduleOne } from 'module-1';

// After a 2-second delay, load and execute module-2 asynchronously
setTimeout( async () => {
	try {
		const module = await import( 'module-2' );
		const { moduleTwo } = module;
		moduleTwo();
	} catch ( error ) {
		console.error( 'Error loading module-2:', error );
	}
}, 2000 );

// After a 2-second delay, load and execute module-2 asynchronously
setTimeout( async () => {
	// Execute moduleOne immediately
	moduleOne();
}, 4000 );

// Initialize WordPress Interactivity store for this block
const { state } = store( 'script-modules-block-view', {
	state: {
		text: 'Hello World',
		clicked: false,
		// Dynamic color state that changes based on clicked status
		color: () => ( state.clicked ? 'red' : 'blue' ),
	},
	actions: {
		// Generator function to handle module loading and state updates
		*loadModule() {
			try {
				// Dynamic import of lodash startCase - registered with build process
				// This will be deferred until the action is called
				// This will be converted to dynamic import as it's registered
				const { default: startCase } = yield import(
					`@lodash/startCase`
				);

				// Load and execute module-3
				const module = yield import( 'module-3' );
				const { moduleThree } = module;
				const value = moduleThree();
				// Update state with transformed text and clicked status
				state.text = startCase( value );
				state.clicked = true;

				// Dynamic import of lodash camelCase from ESM CDN
				// This will be converted to static import as it's not registered
				const { default: camelCase } = yield import(
					`https://esm.run/lodash-es/camelCase`
				);
				console.log( camelCase( '__FOO_BAR__' ) );

				// Load and execute fetchPosts module functions
				const { fetchPosts, newPost } = yield import( 'fetchPosts' );
				const posts = yield fetchPosts();
				console.log( 'Posts:', posts );
				const newPostResponse = yield newPost();
				console.log( 'New post:', newPostResponse );
			} catch ( error ) {
				console.error( 'Error loading module-3:', error );
			}
		},
	},
} );

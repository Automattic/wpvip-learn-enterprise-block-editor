/* eslint-disable no-console, import/no-unresolved */
import { store } from '@wordpress/interactivity';
import { moduleOne } from 'module-1';

moduleOne();

setTimeout( async () => {
	try {
		const module = await import( 'module-2' );
		const { moduleTwo } = module;
		moduleTwo();
	} catch ( error ) {
		console.error( 'Error loading module-2:', error );
	}
}, 2000 );

const { state } = store( 'script-modules-block-view', {
	state: {
		text: 'Hello World',
		clicked: false,
		color: () => ( state.clicked ? 'red' : 'blue' ),
	},
	actions: {
		*loadModule() {
			try {
				// because we have registered this module, the build process
				// knows how to treat this module, and mark it as dynamic import
				// so the loading will be deferred until this action is called.
				const { default: startCase } = yield import(
					`@lodash/startCase`
				);

				const module = yield import( 'module-3' );
				const { moduleThree } = module;
				const value = moduleThree();
				state.text = startCase( value );
				state.clicked = true;

				// because we haven't registered this module, the build process
				// converts this call into a static import and load it from the beginning.
				const { default: camelCase } = yield import(
					`https://esm.run/lodash-es/camelCase`
				);
				console.log( camelCase( '__FOO_BAR__' ) );

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

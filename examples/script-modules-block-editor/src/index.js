/**
 * @file index.js
 * @description Main entry point for the block editor enhancements.
 * This file initializes various features that enhance the WordPress block editor experience:
 *
 * Features:
 * - Reading Time Panel: Shows estimated reading time in the document sidebar
 * - Copy Block JSON: Adds ability to copy block JSON representation
 * - Dynamic Feature Loading: Loads additional features after editor initialization
 *
 * Dependencies:
 * - @wpviplearn/reading-time-panel
 * - @wpviplearn/copy-block-json
 * - @wpviplearn/some-return
 * - @wpviplearn/tools (for logging utilities)
 */

/* eslint-disable no-console, import/no-unresolved */
import '@wpviplearn/reading-time-panel';
const { subscribe } = wp.data;

/**
 * Initialize block editor enhancements when the DOM is ready.
 * This includes:
 * 1. Setting up the interface state subscription
 * 2. Loading the reading time panel when the document sidebar is active
 * 3. Managing dynamic imports of additional features
 */
wp.domReady( async () => {
	const { log, text } = await import( '@wpviplearn/tools' );
	log( 'dom ready' );
	log( 'subscribed to core/interface' );
	log( text );

	let hasTriggered = false;
	let previousState = null;

	/**
	 * Subscribe to changes in the core/interface store to detect
	 * when the document sidebar becomes active.
	 */
	const unsubscribe = subscribe( () => {
		const currentState = wp.data
			.select( 'core/interface' )
			.getActiveComplementaryArea( 'core' );

		if ( previousState !== currentState ) {
			log(
				`core/interface state changed from: ${ previousState } to: ${ currentState }`
			);
			previousState = currentState;
		}

		/**
		 * When the document sidebar becomes active for the first time,
		 * load and initialize the reading time panel.
		 */
		if ( currentState === 'edit-post/document' && ! hasTriggered ) {
			// First time the edit-post/document state is seen
			// we load the reading time panel
			log( 'First time seeing edit-post/document!' );
			import( '@wpviplearn/reading-time-panel' ).then(
				( { registerReadingTimePanel } ) => {
					log( "'@wpviplearn/reading-time-panel' loaded" );
					registerReadingTimePanel();
				}
			);
			hasTriggered = true;
			unsubscribe();
			log( 'unsubscribed to core/interface' );
		}
	}, [ 'core/interface' ] );
} );

/**
 * Load additional features after a delay to ensure proper initialization
 */

// Load copy block JSON feature after 3 seconds
setTimeout( () => {
	import( '@wpviplearn/copy-block-json' ).then(
		( { registerCopyBlockAsJsonMenuItem } ) => {
			console.log( "'@wpviplearn/copy-block-json' loaded" );
			registerCopyBlockAsJsonMenuItem();
		}
	);
}, 3000 );

// Load some return feature after 1 second
setTimeout( () => {
	import( '@wpviplearn/some-return' ).then( ( { text } ) => {
		console.log( text );
	} );
}, 1000 );

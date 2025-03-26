/* eslint-disable no-console, import/no-unresolved */
import '@wpviplearn/reading-time-panel';

setTimeout( () => {
	import( '@wpviplearn/copy-block-json' ).then( () => {
		console.log( "'@wpviplearn/copy-block-json' loaded" );
	} );
}, 3000 );

setTimeout( () => {
	import( '@wpviplearn/some-return' ).then( ( { text } ) => {
		console.log( text );
	} );
}, 1000 );

setTimeout( () => {
	import( '@wpviplearn/another-return' ).then( ( { text } ) => {
		console.log( text );
	} );
}, 2000 );

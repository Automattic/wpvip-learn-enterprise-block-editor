/* eslint-disable no-console, import/no-unresolved */
import { moduleOne } from 'module-1';
const $ = window.jQuery;

moduleOne();

setTimeout( async () => {
	try {
		// Load module-2
		const { moduleTwo } = await import( 'module-2' );
		moduleTwo();

		// Load module-3
		const { moduleThree } = await import( 'module-3' );
		moduleThree();
	} catch ( error ) {
		console.error( 'Error loading modules:', error );
	}
}, 3000 );

// Modern jQuery document ready syntax
$( function () {
	console.log( `Good ol' DOM ready with jQuery.` );
} );

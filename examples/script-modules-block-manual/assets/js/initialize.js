/* eslint-disable no-console, import/no-unresolved */
// Import moduleOne from the module-1 package
import { moduleOne } from 'module-1';
// Get jQuery from the global window object
const $ = window.jQuery;

// Execute moduleOne immediately
moduleOne();

// After a 3-second delay, load and execute additional modules asynchronously
setTimeout( async () => {
	try {
		// Dynamically import and execute module-2
		const { moduleTwo } = await import( 'module-2' );
		moduleTwo();

		// Dynamically import and execute module-3, then log its return value
		const { moduleThree } = await import( 'module-3' );
		const messageModuleThree = moduleThree();
		console.log( messageModuleThree );
	} catch ( error ) {
		// Log any errors that occur during module loading
		console.error( 'Error loading modules:', error );
	}
}, 3000 );

// Initialize jQuery functionality when the DOM is fully loaded
// Using modern jQuery document ready syntax
$( function () {
	console.log( 'jQuery is ready!' );
	console.log( 'jQuery Version:', $.fn.jquery );
} );

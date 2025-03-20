/* eslint-disable no-console, import/no-unresolved */
import { moduleOne } from 'module-1';
import { moduleTwo } from 'module-2';
import { moduleThree } from 'module-3';
const $ = window.jQuery;

moduleOne();
moduleTwo();
moduleThree();

$( document ).on( 'ready', () => {
	console.log( `Good ol' DOM ready with jQuery.` );
} );

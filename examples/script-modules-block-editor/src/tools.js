/* eslint-disable no-console */
export const text = 'Hello World from tools.js';

/**
 * Simple colored console log
 * @param {string} message           - The message to log
 * @param {string} [color='#bada55'] - Text color
 * @param {string} [bg='#222']       - Background color
 */
export const log = ( message, color = '#FFF', bg = '#222' ) => {
	console.log( `%c ${ message } `, `background: ${ bg }; color: ${ color }` );
};

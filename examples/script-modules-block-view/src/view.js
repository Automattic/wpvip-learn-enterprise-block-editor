/* eslint-disable no-console, import/no-unresolved */
import { store } from '@wordpress/interactivity';
import { moduleOne } from 'module-1';

moduleOne();

setTimeout( () => {
	import( 'module-2' )
		.then( ( module ) => {
			const { moduleTwo } = module;
			moduleTwo();
		} )
		.catch( ( error ) => {
			console.error( 'Error loading module-3:', error );
		} );
}, 2000 );

const { state } = store( 'script-modules-block-view', {
	state: {
		text: 'Hello World',
		clicked: false,
		color: () => ( state.clicked ? 'red' : 'blue' ),
	},
	actions: {
		loadModule() {
			console.log( 'loadModule' );
			import( 'module-3' )
				.then( ( module ) => {
					const { moduleThree } = module;
					const value = moduleThree();
					state.text = value;
					state.clicked = true;
				} )
				.catch( ( error ) => {
					console.error( 'Error loading module-3:', error );
				} );
		},
	},
} );

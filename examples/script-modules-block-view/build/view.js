import * as e from 'https://esm.run/lodash-es/camelCase';
import * as o from '@wordpress/interactivity';
import * as t from 'module-1';
var r = {
		271: ( e ) => {
			e.exports = import( 'module-3' );
		},
		345: ( o ) => {
			o.exports = e;
		},
		783: ( e ) => {
			e.exports = import( '@lodash/startCase' );
		},
		896: ( e ) => {
			e.exports = import( 'module-2' );
		},
		980: ( e ) => {
			e.exports = import( 'fetchPosts' );
		},
	},
	s = {};
function l( e ) {
	var o = s[ e ];
	if ( void 0 !== o ) return o.exports;
	var t = ( s[ e ] = { exports: {} } );
	return r[ e ]( t, t.exports, l ), t.exports;
}
( l.d = ( e, o ) => {
	for ( var t in o )
		l.o( o, t ) &&
			! l.o( e, t ) &&
			Object.defineProperty( e, t, { enumerable: ! 0, get: o[ t ] } );
} ),
	( l.o = ( e, o ) => Object.prototype.hasOwnProperty.call( e, o ) );
const n = ( ( i = { store: () => o.store } ), ( d = {} ), l.d( d, i ), d );
var i, d;
const c = ( ( e ) => {
	var o = {};
	return l.d( o, e ), o;
} )( { moduleOne: () => t.moduleOne } );
setTimeout( async () => {
	try {
		const e = await Promise.resolve().then( l.bind( l, 896 ) ),
			{ moduleTwo: o } = e;
		o();
	} catch ( e ) {
		console.error( 'Error loading module-2:', e );
	}
}, 2e3 ),
	setTimeout( async () => {
		( 0, c.moduleOne )();
	}, 4e3 );
const { state: a } = ( 0, n.store )( 'script-modules-block-view', {
	state: {
		text: 'Hello World',
		clicked: ! 1,
		color: () => ( a.clicked ? 'red' : 'blue' ),
	},
	actions: {
		*loadModule() {
			try {
				const { default: e } = yield Promise.resolve().then(
						l.bind( l, 783 )
					),
					o = yield Promise.resolve().then( l.bind( l, 271 ) ),
					{ moduleThree: t } = o,
					r = t();
				( a.text = e( r ) ), ( a.clicked = ! 0 );
				const { default: s } = yield Promise.resolve().then(
					l.bind( l, 345 )
				);
				console.log( s( '__FOO_BAR__' ) );
				const { fetchPosts: n, newPost: i } =
						yield Promise.resolve().then( l.bind( l, 980 ) ),
					d = yield n();
				console.log( 'Posts:', d );
				const c = yield i();
				console.log( 'New post:', c );
			} catch ( e ) {
				console.error( 'Error loading module-3:', e );
			}
		},
	},
} );

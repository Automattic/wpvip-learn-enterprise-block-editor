import { __ } from '@wordpress/i18n';

export const formatDate = ( timestamp ) => {
	const date = new Date( timestamp );
	const now = new Date();
	const diff = now - date;
	const days = Math.floor( diff / ( 1000 * 60 * 60 * 24 ) );

	if ( days === 0 ) {
		return (
			__( 'today', 'review-system' ) +
			' ' +
			date.toLocaleTimeString( [], {
				hour: '2-digit',
				minute: '2-digit',
			} )
		);
	} else if ( days === 1 ) {
		return (
			__( 'yesterday', 'review-system' ) +
			' ' +
			date.toLocaleTimeString( [], {
				hour: '2-digit',
				minute: '2-digit',
			} )
		);
	}
	return (
		date.toLocaleDateString() +
		' ' +
		date.toLocaleTimeString( [], {
			hour: '2-digit',
			minute: '2-digit',
		} )
	);
};

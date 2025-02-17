/**
 * Unregisters Social Link block variations.
 *
 * This function unregisters Social Link block variations that are not in the allowedVariations array.
 * It retrieves all Social Link block variations and iterates through them to unregister any variations
 * that are not in the allowed list.
 *
 * @see https://github.com/ndiego/editor-curation-examples
 */
function unregisterSocialLinkVariations() {
	const allowedVariations = [
		'wordpress',
		'facebook',
		'x',
		'linkedin',
		'github',
		'gravatar',
	];

	// Get all Social Link block variations.
	const allVariations = wp.data
		.select( 'core/blocks' )
		.getBlockVariations( 'core/social-link' );

	allVariations.forEach( function ( variation ) {
		if ( allowedVariations.indexOf( variation.name ) === -1 ) {
			wp.blocks.unregisterBlockVariation(
				'core/social-link',
				variation.name
			);
		}
	} );
}

wp.domReady( () => {
	unregisterSocialLinkVariations();
} );

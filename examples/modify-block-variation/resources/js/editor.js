/**
 * Modifies the embed block variations.
 *
 * This function modifies the embed block variations to add a new variation with a custom alignment.
 * It checks if the block name is 'core/embed' and then modifies the variations array to include a new
 * variation with the 'wide' alignment.
 *
 * @param {Object} settings The block settings
 * @param {string} name     The block name
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#blocks-registerblocktype
 */
function customEmbedVariations( settings, name ) {
	if ( name !== 'core/embed' ) {
		return settings;
	}

	const variations = settings.variations?.map( ( variation ) => {
		if ( variation.name === 'youtube' ) {
			return {
				...variation,
				attributes: {
					...variation.attributes,
					align: 'wide',
				},
			};
		}
		return variation;
	} );

	return {
		...settings,
		variations,
	};
}
wp.hooks.addFilter(
	'blocks.registerBlockType',
	'my-plugin/custom-embed-variations',
	customEmbedVariations
);

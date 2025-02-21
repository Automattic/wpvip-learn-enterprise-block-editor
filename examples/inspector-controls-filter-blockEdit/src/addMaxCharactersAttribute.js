import { addFilter } from '@wordpress/hooks';

/**
 * Add the `maxCharacters` attribute to the Paragraph block.
 *
 * @param {Object} settings Block settings.
 * @param {string} name     Block name.
 * @return {Object} Modified block settings.
 */
const addMaxCharactersAttribute = ( settings, name ) => {
	// Only apply to the Paragraph block.
	if ( name !== 'core/paragraph' ) {
		return settings;
	}

	// Add the `maxCharacters` attribute to the block's attributes.
	settings.attributes = {
		...settings.attributes,
		maxCharacters: {
			type: 'number',
			default: 100, // Default character limit.
		},
	};

	return settings;
};

// Hook into the blocks.registerBlockType filter.

addFilter(
	'blocks.registerBlockType',
	'my-plugin/add-max-characters-attribute',
	addMaxCharactersAttribute
);

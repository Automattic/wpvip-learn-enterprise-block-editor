import { addFilter } from '@wordpress/hooks';
import { createBlock } from '@wordpress/blocks';

function modifyBlockTransforms( settings, name ) {
	// Remove the heading block from the paragraph block's transforms.
	if ( name === 'core/heading' ) {
		settings.transforms = {
			...settings.transforms,
			from:
				settings.transforms?.from?.filter(
					( transform ) =>
						! (
							transform.type === 'block' &&
							transform.blocks?.includes( 'core/paragraph' )
						)
				) || [],
		};
	}

	// Add a custom transform to the paragraph block to transform to a heading block.
	// only if the paragraph has the "custom-class" class.
	if ( name === 'core/paragraph' ) {
		settings.transforms = {
			...settings.transforms,
			to: [
				...( settings.transforms?.to || [] ),
				{
					type: 'block',
					blocks: [ 'core/heading' ],
					transform: ( { content } ) =>
						createBlock( 'core/heading', { content } ),
					isMatch: ( attributes ) =>
						attributes.className?.includes( 'custom-class' ),
				},
			],
		};
	}

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'my-plugin/modify-paragraph-transforms',
	modifyBlockTransforms
);

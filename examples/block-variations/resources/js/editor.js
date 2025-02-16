wp.blocks.registerBlockVariation( 'core/spacer', {
	name: 'wpviplearn/spacer',
	title: wp.i18n.__( 'Spacer 180', 'example-block-variation' ),
	scope: [ 'block', 'inserter', 'transform' ],
	attributes: {
		height: '180px',
	},
	isActive: ( blockAttributes ) =>
		blockAttributes.height && '180px' === blockAttributes.height,
} );

const sharedAttributes = {
	align: 'wide',
	className: 'custom-block-style',
};

const createVariation = (
	blockName,
	variationName,
	title,
	customAttributes = {},
	customInnerBlocks = []
) => {
	wp.blocks.registerBlockVariation( blockName, {
		name: variationName,
		title,
		attributes: {
			...sharedAttributes,
			...customAttributes,
		},
		innerBlocks: customInnerBlocks,
	} );
};

// Apply reusable configuration
createVariation( 'core/group', 'featured-content', 'Featured Content Group', {
	backgroundColor: 'pale-pink',
} );

createVariation(
	'core/columns',
	'service-columns',
	'Service Columns',
	{
		columns: 3,
	},
	[
		[
			'core/column',
			{},
			[ [ 'core/paragraph', { content: 'Service 1' } ] ],
		],
		[
			'core/column',
			{},
			[ [ 'core/paragraph', { content: 'Service 2' } ] ],
		],
		[
			'core/column',
			{},
			[ [ 'core/paragraph', { content: 'Service 3' } ] ],
		],
	]
);

wp.blocks.unregisterBlockVariation( 'core/embed', 'wordpress' );
wp.hooks.addFilter(
	'blocks.registerBlockVariation',
	'wpviplearn/modify-variations',
	( variation, name ) => {
		if ( name === 'core/embed' && variation.name === 'youtube' ) {
			return {
				...variation,
				attributes: {
					...variation.attributes,
					align: 'wide',
				},
			};
		}
		return variation;
	}
);

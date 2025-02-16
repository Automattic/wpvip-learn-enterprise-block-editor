import { createBlock, registerBlockVariation } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { subscribe, select, dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow } from '@wordpress/components';
import quotes from './quotes.json';
/**
 * Add the "namespace" attribute to "core/quote" block
 * @param {Object} settings
 */
function addAttributes( settings ) {
	if ( 'core/quote' !== settings.name ) {
		return settings;
	}

	const extraAttributes = {
		namespace: {
			type: 'string',
		},
	};

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes,
			...extraAttributes,
		},
	};

	return newSettings;
}

addFilter(
	'blocks.registerBlockType',
	'quote-random/add-attributes',
	addAttributes
);

const quoteApiEditorVariationSettings = {
	name: 'quote-random-editor',
	description:
		'A "core/quote" block variation that displays a random quote from a local JSON file',
	title: 'Quote Random',
	scope: [ 'block', 'inserter', 'transform' ],
	keywords: [ 'quote' ],
	icon: 'universal-access',
	attributes: {
		namespace: 'quote-random-editor',
	},
	isActive: [ 'namespace' ],
};

/**
 * Check if the block is the "quote-random" variation
 * @param {Object} props
 */
const isQuoteAPIEditorVariation = ( props ) => {
	const {
		attributes: { namespace },
	} = props;
	return namespace && namespace === 'quote-random-editor';
};

export const QuoteAPIEditorInspectorControls = ( props ) => {
	const { clientId, setAttributes } = props;

	const onClickUpdateData = () => {
		const randomQuote =
			quotes[ Math.floor( Math.random() * quotes.length ) ];
		setAttributes( {
			citation: randomQuote.author,
		} );
		const newInnerParagraphWithQuote = [
			createBlock( 'core/paragraph', {
				content: randomQuote.content,
			} ),
		];
		dispatch( blockEditorStore ).replaceInnerBlocks(
			clientId,
			newInnerParagraphWithQuote
		);
	};

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Quote settings', 'quote-random' ) }
				initialOpen={ true }
			>
				<PanelRow>
					<Button
						variant="primary"
						label={ __( 'Update data', 'quote-random' ) }
						onClick={ onClickUpdateData }
						icon="update"
						iconPosition="left"
					>
						{ __( 'Get random quote', '' ) }
					</Button>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);
};

/**
 * Adds inspector controls to the BlockEdit component.
 *
 * @param {Function} BlockEdit - The BlockEdit component.
 * @return {Function} - A modified version of the BlockEdit component with added inspector controls.
 */
function addInspectorControls( BlockEdit ) {
	return ( props ) => {
		if ( ! isQuoteAPIEditorVariation( props ) ) {
			return <BlockEdit { ...props } />;
		}
		return (
			<>
				<BlockEdit { ...props } />
				<QuoteAPIEditorInspectorControls { ...props } />
			</>
		);
	};
}

/**
 * Subscribe to the block editor store and select the last block
 * if it is a "core/quote" block with the "quote-random-editor" namespace
 * This is so that the quote-random-editor variation is selected when the block is inserted
 * and the inspector controls are shown.
 */
subscribe( () => {
	const blocks = select( blockEditorStore ).getBlocks();
	const lastBlock = blocks[ blocks.length - 1 ];

	if (
		lastBlock &&
		lastBlock.name === 'core/quote' &&
		lastBlock.attributes.namespace === 'quote-random-editor'
	) {
		dispatch( blockEditorStore ).selectBlock( lastBlock.clientId );
		// Unsubscribe to prevent continuous selection
		return true;
	}
} );

/**
 * Register the "quote-random" block variation
 */

registerBlockVariation( 'core/quote', quoteApiEditorVariationSettings );
addFilter(
	'editor.BlockEdit',
	'quote-random-editor/add-inspector-controls',
	addInspectorControls
);

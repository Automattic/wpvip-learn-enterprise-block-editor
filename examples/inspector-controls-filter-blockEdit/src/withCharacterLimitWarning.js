import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Notice, TextControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

const withCharacterLimitWarning = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		// Only apply to the Paragraph block.
		if ( props.name !== 'core/paragraph' ) {
			return <BlockEdit { ...props } />;
		}

		// Get the block's attributes and setAttributes function.
		const { attributes, setAttributes } = props;
		const { content, maxCharacters } = attributes;

		// Check if the content exceeds the character limit.
		const exceedsLimit =
			content && maxCharacters && content.length > maxCharacters;

		// Update the maxCharacters attribute.
		const updateMaxCharacters = ( newValue ) => {
			const parsedValue = parseInt( newValue, 10 );
			if ( ! isNaN( parsedValue ) && parsedValue > 0 ) {
				setAttributes( { maxCharacters: parsedValue } );
			}
		};

		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
						title="Character Limit Settings"
						initialOpen={ true }
					>
						<TextControl
							label="Maximum Characters"
							type="number"
							value={ maxCharacters || '' }
							onChange={ updateMaxCharacters }
							min={ 1 }
							help="Set the maximum number of characters allowed for this paragraph."
						/>
						{ exceedsLimit && (
							<Notice status="warning" isDismissible={ false }>
								This paragraph exceeds the recommended{ ' ' }
								{ maxCharacters }-character limit. Consider
								splitting it into smaller paragraphs for better
								readability.
							</Notice>
						) }
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withCharacterLimitWarning' );

// Hook into the BlockEdit component.
addFilter(
	'editor.BlockEdit',
	'my-plugin/with-character-limit-warning',
	withCharacterLimitWarning
);

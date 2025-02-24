import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';

// Add a custom class to the Paragraph block if it exceeds the character limit.
const addCharacterLimitClass = createHigherOrderComponent(
	( BlockListBlock ) => {
		return ( props ) => {
			// Only apply to the Paragraph block.
			if ( props.name !== 'core/paragraph' ) {
				return <BlockListBlock { ...props } />;
			}

			// Get the block's attributes.
			const { attributes } = props;
			const { content, maxCharacters } = attributes;

			// Check if the content exceeds the character limit.
			const exceedsLimit =
				content && maxCharacters && content.length > maxCharacters;

			// Add a custom class if the limit is exceeded.
			if ( exceedsLimit ) {
				props.className = `${
					props.className || ''
				} exceeds-character-limit`;
			}

			return <BlockListBlock { ...props } />;
		};
	},
	'addCharacterLimitClass'
);

// Hook into the BlockListBlock component.
addFilter(
	'editor.BlockListBlock',
	'my-plugin/add-character-limit-class',
	addCharacterLimitClass
);

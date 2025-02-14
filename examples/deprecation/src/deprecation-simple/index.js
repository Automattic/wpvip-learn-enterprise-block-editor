import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import metadata from './block.json';

registerBlockType( metadata.name, {
	attributes: {
		content: { type: 'string', default: '' },
		alignment: { type: 'string', default: 'left' },
	},
	edit: ( { attributes, setAttributes } ) => {
		return (
			<div>
				<TextControl
					label="Content"
					value={ attributes.content }
					onChange={ ( content ) => setAttributes( { content } ) }
				/>
			</div>
		);
	},
	save: ( props ) => {
		return (
			<p style={ { textAlign: props.attributes.alignment } }>
				{ props.attributes.content }
			</p>
		);
	},

	deprecated: [
		{
			attributes: {
				content: { type: 'string' },
			},
			save: ( { attributes } ) => {
				return <p>{ attributes.content }</p>;
			},
		},
	],
} );

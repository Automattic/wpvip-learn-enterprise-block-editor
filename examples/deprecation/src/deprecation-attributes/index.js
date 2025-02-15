import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import metadata from './block.json';

const v2 = {
	attributes: {
		title: { type: 'string' },
		content: { type: 'string' },
	},
	migrate: ( attributes ) => {
		return {
			headline: attributes.title, // Renaming 'title' to 'headline'
			body: attributes.content, // Renaming 'content' to 'body'
		};
	},
	save: ( props ) => {
		return (
			<div>
				<h2>{ props.attributes.title }</h2>
				<p>{ props.attributes.content }</p>
			</div>
		);
	},
};

registerBlockType( metadata.name, {
	edit: ( { attributes, setAttributes } ) => {
		return (
			<div>
				<TextControl
					label="Headline"
					value={ attributes.headline }
					onChange={ ( headline ) => setAttributes( { headline } ) }
				/>
				<TextControl
					label="Content"
					value={ attributes.body }
					onChange={ ( body ) => setAttributes( { body } ) }
				/>
			</div>
		);
	},
	save: ( { attributes } ) => {
		return (
			<div>
				<h2>{ attributes.headline }</h2>
				<p>{ attributes.body }</p>
			</div>
		);
	},

	deprecated: [ v2 ],
} );

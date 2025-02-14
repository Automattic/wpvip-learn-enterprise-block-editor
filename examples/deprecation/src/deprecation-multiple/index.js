import { registerBlockType } from '@wordpress/blocks';
import { TextControl, TextareaControl } from '@wordpress/components';
import metadata from './block.json';

const v1 = {
	/* v1 attributes */
	attributes: {
		title: { type: 'string' },
		content: { type: 'string' },
	},
	/* v1 save function */
	save: ( props ) => {
		return (
			<p>
				<em>{ props.attributes.content }</em>
			</p>
		);
	},
};

const v2 = {
	/* v2 attributes */
	attributes: {
		title: { type: 'string' },
		body: { type: 'string' }, // Renamed 'content' to 'body'
	},
	/* v2 save function */
	save: ( props ) => {
		return <p>{ props.attributes.body }</p>;
	},
};

const v3 = {
	/* v3 attributes */
	attributes: {
		headline: { type: 'string' }, // Renamed 'title' to 'headline'
		body: { type: 'string' },
	},
	/* v3 save function */
	save: ( props ) => {
		return <h2>{ props.attributes.headline }</h2>;
	},
};

const deprecated = [ v3, v2, v1 ]; // Note the reverse chronological order

registerBlockType( metadata.name, {
	attributes: {
		headline: { type: 'string' },
		body: { type: 'string' },
	},
	edit: ( { attributes, setAttributes } ) => {
		return (
			<div>
				<TextControl
					label="Headline"
					value={ attributes.headline }
					onChange={ ( headline ) => setAttributes( { headline } ) }
				/>
				<TextareaControl
					label="Body"
					value={ attributes.body }
					onChange={ ( body ) => setAttributes( { body } ) }
				/>
			</div>
		);
	},
	save: ( props ) => {
		return (
			<div>
				<h1>{ props.attributes.headline }</h1>
				<p>{ props.attributes.body }</p>
			</div>
		);
	},
	deprecated,
} );

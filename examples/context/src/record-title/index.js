import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit( { context } ) {
		return (
			'(Block Editor - my-plugin/record-title) The record ID: ' +
			context[ 'my-plugin/recordId' ]
		);
	},

	save() {
		return null;
	},
} );

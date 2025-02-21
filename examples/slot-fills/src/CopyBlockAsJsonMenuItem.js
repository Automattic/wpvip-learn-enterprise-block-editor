/* global navigator */
/* eslint-disable no-console */

import { registerPlugin } from '@wordpress/plugins';
import { PluginBlockSettingsMenuItem } from '@wordpress/editor';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

const CopyBlockAsJsonMenuItem = () => {
	// Get the selected block
	const selectedBlock = useSelect( ( select ) => {
		return select( blockEditorStore ).getSelectedBlock();
	}, [] );

	// Handle copying to clipboard
	const handleCopy = () => {
		if ( selectedBlock ) {
			// Create a JSON string of the block's attributes and inner blocks
			const blockData = {
				name: selectedBlock.name,
				attributes: selectedBlock.attributes,
				innerBlocks: selectedBlock.innerBlocks,
			};

			// Copy the JSON string to clipboard
			navigator.clipboard
				.writeText( JSON.stringify( blockData, null, 2 ) )
				.then( () => {
					// Could add a notice here to confirm copy
					console.log( 'Block JSON copied to clipboard' );
				} )
				.catch( ( err ) => {
					console.error( 'Failed to copy block JSON:', err );
				} );
		}
	};

	return (
		<PluginBlockSettingsMenuItem
			icon={
				<svg xmlns="http://www.w3.org/2000/svg">
					<circle r="10" cx="10" cy="10" fill="#FFA500" />
				</svg>
			}
			label={ __( 'Copy Block as JSON', 'wpviplearn' ) }
			onClick={ handleCopy }
		/>
	);
};

registerPlugin( 'wpviplearn-copy-json', {
	render: CopyBlockAsJsonMenuItem,
} );

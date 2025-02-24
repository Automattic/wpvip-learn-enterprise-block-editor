import { registerBlockStyle } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

// The CSS for this block style is located in the `style.css` file.
registerBlockStyle( 'core/image', {
	name: 'hand-drawn-js',
	label: __( 'Hand Drawn JS', 'example-block-style-js' ),
} );

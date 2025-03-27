/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = () => {
	const blockProps = useBlockProps.save( {
		'data-wp-interactive':
			'{ "namespace": "elementary/media-text-interactive" }',
		'data-wp-context': '{ "isPlaying": false, "buttonText": "Play" }',
	} );
	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
};
export default Save;

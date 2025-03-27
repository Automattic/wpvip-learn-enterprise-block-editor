/**
 * WordPress Dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

const MY_TEMPLATE = [
	[
		'core/button',
		{
			className: 'interactive-block--button-play',
		},
	],
	[
		'core/video',
		{
			className: 'interactive-block--video',
			src: 'https://www.w3schools.com/html/mov_bbb.mp4', // Default video URL
		},
	],
];

const Edit = () => {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<InnerBlocks template={ MY_TEMPLATE } />
		</div>
	);
};
export default Edit;

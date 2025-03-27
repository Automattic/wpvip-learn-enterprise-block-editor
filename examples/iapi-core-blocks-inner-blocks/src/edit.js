/**
 * WordPress Dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

const MY_TEMPLATE = [
	[
		'core/button',
		{
			className: 'interactive-block',
			text: 'Play', // Default button text
		},
	],
	[
		'core/video',
		{
			className: 'interactive-block',
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

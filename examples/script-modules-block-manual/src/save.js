import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Dynamic Modules – hello from the saved content!' }
		</p>
	);
}

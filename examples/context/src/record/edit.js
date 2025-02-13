import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/block-editor';

export default function Edit( props ) {
	const MY_TEMPLATE = [ [ 'my-plugin/record-title', {} ] ];
	const {
		attributes: { recordId },
		setAttributes,
	} = props;
	return (
		<div>
			<TextControl
				__nextHasNoMarginBottom
				__next40pxDefaultSize
				label={ __( 'Record ID' ) }
				value={ recordId }
				onChange={ ( val ) =>
					setAttributes( { recordId: Number( val ) } )
				}
			/>
			<InnerBlocks template={ MY_TEMPLATE } templateLock="all" />
		</div>
	);
}

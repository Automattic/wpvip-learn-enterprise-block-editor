import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

const withImageSizeControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		// Only apply to the Core Image block
		if ( props.name !== 'core/image' ) {
			return <BlockEdit { ...props } />;
		}

		// Destructure attributes and setAttributes
		const { attributes, setAttributes } = props;
		const { width, height } = attributes;

		return (
			<Fragment>
				{ /* Render the original BlockEdit component */ }
				<BlockEdit { ...props } />

				{ /* Add custom InspectorControls */ }
				<InspectorControls>
					<div
						style={ {
							backgroundColor: '#FFFDCD',
						} }
					>
						<PanelBody
							title="Image Size Settings"
							initialOpen={ true }
						>
							<RangeControl
								label="Width"
								value={ width || '' }
								onChange={ ( value ) =>
									setAttributes( { width: value } )
								}
								min={ 100 }
								max={ 800 }
								step={ 10 }
							/>
							<RangeControl
								label="Height"
								value={ height || '' }
								onChange={ ( value ) =>
									setAttributes( { height: value } )
								}
								min={ 100 }
								max={ 800 }
								step={ 10 }
							/>
						</PanelBody>
					</div>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withImageSizeControls' );

// Hook into the editor.BlockEdit filter
addFilter(
	'editor.BlockEdit',
	'my-plugin/with-image-size-controls',
	withImageSizeControls
);

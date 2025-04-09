const useBlockProps = jest.fn( () => ( {
	className: `wp-block-copyright-date`.trim(),
} ) );

useBlockProps.save = jest.fn( useBlockProps );

const BlockControlsMock = ( { children } ) => (
	<div data-testid="block-controls">{ children }</div>
);

const InspectorControlsMock = ( { children } ) => (
	<div data-testid="inspector-controls">{ children }</div>
);

const RichTextMock = ( {
	value,
	tagName: Tag = 'div',
	className,
	onChange,
} ) => {
	if ( onChange ) {
		return (
			<Tag
				data-testid="rich-text"
				className={ className }
				onChange={ ( e ) => onChange( e.target.innerHTML ) }
				dangerouslySetInnerHTML={ { __html: value } }
			/>
		);
	}
	return (
		<Tag
			data-testid="rich-text-content"
			className={ className }
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	);
};

RichTextMock.Content = ( { value, tagName: Tag = 'div', className } ) => (
	<Tag
		data-testid="rich-text-content"
		className={ className }
		dangerouslySetInnerHTML={ { __html: value } }
	/>
);

export {
	useBlockProps,
	BlockControlsMock as BlockControls,
	RichTextMock as RichText,
	InspectorControlsMock as InspectorControls,
};

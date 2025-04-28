const useBlockProps = jest.fn( () => ( {
	className: `wp-block-copyright-date`.trim(),
} ) );

useBlockProps.save = jest.fn( useBlockProps );

const InspectorControlsMock = ( { children } ) => (
	<div data-testid="inspector-controls">{ children }</div>
);

export { useBlockProps, InspectorControlsMock as InspectorControls };

const ToolbarDropdownMenuMock = ( { controls } ) => (
	<div data-testid="toolbar-dropdown">
		{ controls.map( ( { title, onClick } ) => (
			<button
				key={ title }
				data-testid={ `control-${ title }` }
				onClick={ onClick }
			>
				{ title }
			</button>
		) ) }
	</div>
);

const PanelBodyMock = ( { title, children } ) => (
	<div data-testid="panel-body" data-title={ title }>
		{ children }
	</div>
);

const TextControlMock = ( { label, value = '', onChange } ) => {
	return (
		<input
			data-testid="text-control"
			aria-label={ label }
			value={ value }
			data-value={ value }
			onChange={ ( e ) => {
				onChange( e.target.value );
			} }
			onInput={ ( e ) => {
				onChange( e.target.value );
			} }
		/>
	);
};

const ToggleControlMock = ( { label, checked, onChange } ) => (
	<input
		data-testid="toggle-control"
		type="checkbox"
		aria-label={ label }
		checked={ checked || false }
		onChange={ () => onChange() }
	/>
);

module.exports = {
	ToolbarDropdownMenu: ToolbarDropdownMenuMock,
	PanelBody: PanelBodyMock,
	TextControl: TextControlMock,
	ToggleControl: ToggleControlMock,
};

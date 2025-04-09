import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Save from '../../src/save';

describe.only( 'Save Component', () => {
	it( 'returns null when fallbackCurrentYear is not provided', () => {
		const testAttributes = {
			fallbackCurrentYear: null,
			showStartingYear: false,
			startingYear: null,
		};
		const { container } = render( <Save attributes={ testAttributes } /> );
		expect( container.firstChild ).toBeNull();
	} );

	it( 'displays only current year when showStartingYear is false', () => {
		const testAttributes = {
			fallbackCurrentYear: '2024',
			showStartingYear: false,
			startingYear: '2020',
		};
		const { container } = render( <Save attributes={ testAttributes } /> );
		expect( container.textContent ).toBe( '© 2024' );
	} );

	it( 'displays only current year when startingYear is not provided', () => {
		const testAttributes = {
			fallbackCurrentYear: '2024',
			showStartingYear: true,
			startingYear: null,
		};
		const { container } = render( <Save attributes={ testAttributes } /> );
		expect( container.textContent ).toBe( '© 2024' );
	} );

	it( 'displays year range when both showStartingYear and startingYear are provided', () => {
		const testAttributes = {
			fallbackCurrentYear: '2024',
			showStartingYear: true,
			startingYear: '2020',
		};
		const { container } = render( <Save attributes={ testAttributes } /> );
		expect( container.textContent ).toBe( '© 2020–2024' );
	} );

	it( 'applies correct block props', () => {
		const testAttributes = {
			fallbackCurrentYear: '2023',
			showStartingYear: false,
			startingYear: '',
		};
		const { container } = render( <Save attributes={ testAttributes } /> );
		const paragraph = container.querySelector( 'p' );
		expect( paragraph ).toBeTruthy();
		expect( paragraph ).toHaveClass( 'wp-block-copyright-date' );
	} );
} );

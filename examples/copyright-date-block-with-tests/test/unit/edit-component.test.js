import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Edit from '../../src/edit';

const mockEditProps = {
	attributes: {
		fallbackCurrentYear: '2024',
		showStartingYear: false,
		startingYear: '',
	},
	setAttributes: jest.fn(),
	clientId: 'test-id',
	className: 'wp-block-copyright-date',
};

// Mock Date to return a fixed date for all tests
const originalDate = global.Date;
global.Date = class extends Date {
	getFullYear() {
		return 2024;
	}
};

beforeEach( () => {
	mockEditProps.setAttributes.mockClear();
	jest.clearAllMocks();
} );

afterAll( () => {
	global.Date = originalDate;
} );

describe( 'Edit Component', () => {
	it( 'matches snapshot', () => {
		const { container: renderedEditComponent } = render(
			<Edit { ...mockEditProps } />
		);
		expect( renderedEditComponent ).toMatchSnapshot();
	} );

	it( 'displays current year by default', () => {
		render( <Edit { ...mockEditProps } /> );
		// Using a regex to match the text since the text node may be split
		expect( screen.getByText( /© 2024/i ) ).toBeInTheDocument();
	} );

	describe( 'Settings Panel', () => {
		it( 'renders settings panel', () => {
			render( <Edit { ...mockEditProps } /> );
			// Find by data attribute instead of text
			expect( screen.getByTestId( 'panel-body' ) ).toHaveAttribute(
				'data-title',
				'Settings'
			);
		} );

		it( 'toggles show starting year setting', async () => {
			const user = userEvent.setup();
			render( <Edit { ...mockEditProps } /> );

			const toggle = screen.getByLabelText( 'Show starting year' );
			await user.click( toggle );

			expect( mockEditProps.setAttributes ).toHaveBeenCalledWith( {
				showStartingYear: true,
			} );
		} );

		it( 'shows starting year input when toggle is enabled', () => {
			const propsWithStartingYear = {
				...mockEditProps,
				attributes: {
					...mockEditProps.attributes,
					showStartingYear: true,
				},
			};

			render( <Edit { ...propsWithStartingYear } /> );
			expect(
				screen.getByLabelText( 'Starting year' )
			).toBeInTheDocument();
		} );

		it( 'updates starting year when input changes', async () => {
			// Use a spy to track calls to setAttributes
			const setAttributes = jest.fn();
			const propsWithStartingYear = {
				...mockEditProps,
				attributes: {
					...mockEditProps.attributes,
					showStartingYear: true,
				},
				setAttributes,
			};

			render( <Edit { ...propsWithStartingYear } /> );

			// Find the TextControl component
			const input = screen.getByLabelText( 'Starting year' );

			// Simulate a direct change by firing a change event with a custom value
			fireEvent.change( input, { target: { value: '2020' } } );

			// Check if our spy was called with the right value
			expect( setAttributes ).toHaveBeenCalledWith( {
				startingYear: '2020',
			} );
		} );
	} );

	describe( 'Display Logic', () => {
		it( 'displays year range when starting year is set', () => {
			const propsWithRange = {
				...mockEditProps,
				attributes: {
					...mockEditProps.attributes,
					showStartingYear: true,
					startingYear: '2020',
				},
			};

			render( <Edit { ...propsWithRange } /> );
			// Using a regex to match the text since the text node may be split
			expect( screen.getByText( /© 2020–2024/i ) ).toBeInTheDocument();
		} );

		it( 'displays only current year when starting year is not set', () => {
			render( <Edit { ...mockEditProps } /> );
			// Using a regex to match the text since the text node may be split
			expect( screen.getByText( /© 2024/i ) ).toBeInTheDocument();
		} );
	} );
} );

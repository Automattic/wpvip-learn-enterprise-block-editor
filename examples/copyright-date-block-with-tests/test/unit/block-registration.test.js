/**
 * WordPress dependencies
 */
import {
	createBlock,
	registerBlockType,
	unregisterBlockType,
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import blockJson from '../../src/block.json';

describe( 'Block Registration', () => {
	beforeEach( () => {
		registerBlockType(
			'create-block/copyright-date-block-with-tests',
			blockJson
		);
	} );

	afterEach( () => {
		unregisterBlockType( 'create-block/copyright-date-block-with-tests' );
	} );

	it( 'should create a block with default attributes', () => {
		const block = createBlock(
			'create-block/copyright-date-block-with-tests'
		);
		expect( block.name ).toBe(
			'create-block/copyright-date-block-with-tests'
		);
		expect( block.attributes.fallbackCurrentYear ).toBeUndefined();
		expect( block.attributes.showStartingYear ).toBeUndefined();
		expect( block.attributes.startingYear ).toBeUndefined();
	} );

	it( 'should handle all valid attributes', () => {
		const attributes = {
			fallbackCurrentYear: '2024',
			showStartingYear: true,
			startingYear: '2020',
		};
		const block = createBlock(
			'create-block/copyright-date-block-with-tests',
			attributes
		);
		expect( block.attributes.fallbackCurrentYear ).toBe( '2024' );
		expect( block.attributes.showStartingYear ).toBe( true );
		expect( block.attributes.startingYear ).toBe( '2020' );
	} );

	it( 'should have correct block supports configuration', () => {
		const { supports } = blockJson;

		expect( supports.color.background ).toBe( false );
		expect( supports.color.text ).toBe( true );
		expect( supports.html ).toBe( false );
		expect( supports.typography.fontSize ).toBe( true );
	} );
} );

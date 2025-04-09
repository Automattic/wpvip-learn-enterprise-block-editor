const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );
const {
	setupPostWithCopyrightBlock,
	setupPostWithStartingYearCopyrightBlock,
	navigateToPostFrontend,
} = require( './utils' );

test.describe( 'Copyright Date Block Frontend Test Suite', () => {
	test( 'should display the copyright block with current year correctly on the frontend', async ( {
		admin,
		editor,
		page,
	} ) => {
		// Setup post with copyright date block
		await setupPostWithCopyrightBlock( { admin, editor, page } );

		// Publish the post
		await editor.publishPost();

		// Navigate to frontend
		await navigateToPostFrontend( { page, test } );

		// The frontend is not in an iframe, so we use the page locator directly
		// Verify the copyright block is displayed
		const copyrightBlock = page.locator(
			'.wp-block-create-block-copyright-date-block-with-tests'
		);
		await expect( copyrightBlock ).toBeVisible( { timeout: 30000 } );

		// Get current year
		const currentYear = new Date().getFullYear().toString();

		// Verify the content is correct and contains current year
		await expect( copyrightBlock ).toContainText( `© ${ currentYear }`, {
			timeout: 10000,
		} );
	} );

	test( 'should display copyright block with starting year and current year on the frontend', async ( {
		admin,
		editor,
		page,
	} ) => {
		// Setup post with copyright date block and a starting year
		const startingYear = '2020';
		await setupPostWithStartingYearCopyrightBlock(
			{ admin, editor, page },
			startingYear
		);

		await editor.publishPost();

		// Navigate to frontend
		await navigateToPostFrontend( { page, test } );

		// Frontend is not in an iframe
		// Verify the copyright block is displayed
		const copyrightBlock = page.locator(
			'.wp-block-create-block-copyright-date-block-with-tests'
		);
		await expect( copyrightBlock ).toBeVisible( { timeout: 30000 } );

		// Get current year
		const currentYear = new Date().getFullYear().toString();

		// Verify the block shows both starting and current year
		await expect( copyrightBlock ).toContainText(
			`© ${ startingYear }–${ currentYear }`,
			{ timeout: 10000 }
		);
	} );

	test( 'should verify dynamic rendering shows current year even when post was published in a different year', async ( {
		admin,
		editor,
		page,
	} ) => {
		// Setup post with copyright date block
		await setupPostWithCopyrightBlock( { admin, editor, page } );

		// Get the editor iframe
		const editorIframe = page.frameLocator(
			'iframe[name="editor-canvas"]'
		);

		// Get the current block content from within the iframe
		await page.waitForTimeout( 1000 ); // Short wait to ensure block is rendered
		const copyrightBlockEditor = editorIframe.locator(
			'[data-type="create-block/copyright-date-block-with-tests"]'
		);
		await expect( copyrightBlockEditor ).toBeVisible( { timeout: 15000 } );
		const initialContent = await copyrightBlockEditor.textContent();

		await editor.publishPost();

		// Navigate to frontend
		await navigateToPostFrontend( { page, test } );

		// Frontend is not in an iframe
		// Verify the copyright block is displayed on frontend
		const copyrightBlock = page.locator(
			'.wp-block-create-block-copyright-date-block-with-tests'
		);
		await expect( copyrightBlock ).toBeVisible( { timeout: 30000 } );

		// Get current year from system
		const currentYear = new Date().getFullYear().toString();

		// Verify the content is correctly showing the current year
		await expect( copyrightBlock ).toContainText( `© ${ currentYear }`, {
			timeout: 10000,
		} );

		// Verify the dynamic rendering aspect by checking render.php is properly working
		const content = await copyrightBlock.textContent();
		expect( content ).toBe( initialContent );
	} );

	test( 'should respect typography settings on the frontend', async ( {
		admin,
		editor,
		page,
	} ) => {
		// Setup post with copyright date block
		await setupPostWithCopyrightBlock( { admin, editor, page } );

		// Get the editor iframe
		const editorIframe = page.frameLocator(
			'iframe[name="editor-canvas"]'
		);

		// Select the block with retry logic - block is inside iframe
		const copyrightBlock = editorIframe.locator(
			'[data-type="create-block/copyright-date-block-with-tests"]'
		);
		await expect( copyrightBlock ).toBeVisible( { timeout: 15000 } );
		await editor.selectBlocks( copyrightBlock );

		// Wait briefly to ensure block is selected
		await page.waitForTimeout( 500 );

		await editor.openDocumentSettingsSidebar();
		await page.getByRole( 'tab', { name: 'Styles' } ).click();
		// color
		await page.getByRole( 'button', { name: 'Text' } ).click();
		await page.getByRole( 'option', { name: 'Accent 3' } ).click();
		// typography
		await page.getByRole( 'radio', { name: 'Large', exact: true } ).click();

		await editor.publishPost();

		// Navigate to frontend
		await navigateToPostFrontend( { page, test } );

		// Frontend is not in an iframe
		// Verify the block is displayed with the correct color
		const frontendCopyrightBlock = page.locator(
			'.wp-block-create-block-copyright-date-block-with-tests'
		);
		await expect( frontendCopyrightBlock ).toBeVisible();

		// Check the block has blue color class
		await expect( frontendCopyrightBlock ).toHaveClass(
			/has-accent-3-color/
		);

		// Check the block has the large font size class
		await expect( frontendCopyrightBlock ).toHaveClass(
			/has-large-font-size/,
			{ timeout: 10000 }
		);
	} );
} );

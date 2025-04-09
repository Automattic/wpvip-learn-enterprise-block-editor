const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );
const {
	setupPostWithCopyrightBlock,
	setupPostWithStartingYearCopyrightBlock,
} = require( './utils' );

test.describe( 'Copyright Date Block Editor Test Suite', () => {
	test.beforeEach( async ( { admin } ) => {
		await admin.visitAdminPage( 'index.php' );
	} );

	test( "should insert a copyright date block and verify it's visible", async ( {
		admin,
		editor,
		page,
	} ) => {
		await setupPostWithCopyrightBlock( { admin, editor, page } );

		// Get the editor iframe
		const editorIframe = page.frameLocator(
			'iframe[name="editor-canvas"]'
		);

		// Verify the block is visible in the iframe
		await expect(
			editorIframe.locator(
				'[data-type="create-block/copyright-date-block-with-tests"]'
			)
		).toBeVisible();
	} );

	test( 'should display the current year in the block by default', async ( {
		admin,
		editor,
		page,
	} ) => {
		await setupPostWithCopyrightBlock( { admin, editor, page } );

		const currentYear = new Date().getFullYear().toString();

		// Get the editor iframe
		const editorIframe = page.frameLocator(
			'iframe[name="editor-canvas"]'
		);

		// First find the block itself and verify it's visible
		const blockInIframe = editorIframe.locator(
			'[data-type="create-block/copyright-date-block-with-tests"]'
		);
		await expect( blockInIframe ).toBeVisible();

		// Now check the text content of the entire block
		await expect( blockInIframe ).toContainText( `© ${ currentYear }` );

		// Wait for save notification - this is in the main document, not iframe
		await expect( page.locator( '.components-snackbar' ) ).toContainText(
			'Draft saved',
			{ message: 'Post should be saved successfully' }
		);

		const postContent = await editor.getEditedPostContent();
		expect( postContent ).toContain(
			'<!-- wp:create-block/copyright-date-block-with-tests',
			'Post content should contain the copyright date block opening comment'
		);
		expect( postContent ).toContain(
			currentYear,
			'Post content should contain the current year'
		);
	} );

	test( "should add starting year to the copyright block and verify it's saved", async ( {
		admin,
		editor,
		page,
	} ) => {
		const startingYear = '2020';
		await setupPostWithStartingYearCopyrightBlock(
			{ admin, editor, page },
			startingYear
		);

		const currentYear = new Date().getFullYear().toString();

		// Get the editor iframe
		const editorIframe = page.frameLocator(
			'iframe[name="editor-canvas"]'
		);

		// First find the block itself and verify it's visible
		const blockInIframe = editorIframe.locator(
			'[data-type="create-block/copyright-date-block-with-tests"]'
		);
		await expect( blockInIframe ).toBeVisible();

		// Check the text content of the entire block
		await expect( blockInIframe ).toContainText(
			`© ${ startingYear }–${ currentYear }`
		);

		// Wait for save notification - in main document
		await expect( page.locator( '.components-snackbar' ) ).toContainText(
			'Draft saved',
			{ message: 'Post should be saved successfully' }
		);

		const postContent = await editor.getEditedPostContent();
		expect( postContent ).toContain(
			'<!-- wp:create-block/copyright-date-block-with-tests',
			'Post content should contain the copyright date block opening comment'
		);
		expect( postContent ).toContain(
			`"startingYear":"${ startingYear }"`,
			'Post content should contain the startingYear attribute'
		);
		expect( postContent ).toContain(
			'"showStartingYear":true',
			'Post content should have showStartingYear set to true'
		);
	} );

	test( 'should toggle off starting year and verify only current year is displayed', async ( {
		admin,
		editor,
		page,
	} ) => {
		const startingYear = '2020';
		await setupPostWithStartingYearCopyrightBlock(
			{ admin, editor, page },
			startingYear
		);

		// Get the editor iframe
		const editorIframe = page.frameLocator(
			'iframe[name="editor-canvas"]'
		);

		// Find the copyright block - inside iframe
		const copyrightBlock = editorIframe.locator(
			'[data-type="create-block/copyright-date-block-with-tests"]'
		);
		await expect( copyrightBlock ).toBeVisible();

		// Select the block
		await editor.selectBlocks( copyrightBlock );

		// Brief wait for selection - this one is critical
		await page.waitForTimeout( 300 );

		// Open block settings sidebar using editor utility
		await editor.openDocumentSettingsSidebar();

		// Look for the toggle in the sidebar
		const showStartingYearToggle = page.locator(
			'.components-toggle-control label:has-text("Show starting year")'
		);
		await expect( showStartingYearToggle ).toBeVisible();

		// Click the toggle to turn it off
		await showStartingYearToggle.click();

		const currentYear = new Date().getFullYear().toString();

		// Brief wait for toggle to take effect - this one is critical
		await page.waitForTimeout( 300 );

		// Verify only current year shows
		await expect( copyrightBlock ).toContainText( `© ${ currentYear }` );

		// Verify the block doesn't contain the starting year
		await expect( copyrightBlock ).not.toContainText( startingYear );
	} );
} );

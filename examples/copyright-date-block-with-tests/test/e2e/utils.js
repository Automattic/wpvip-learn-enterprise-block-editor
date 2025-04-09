/**
 * Shared test utilities for E2E tests
 */

const { expect } = require( '@wordpress/e2e-test-utils-playwright' );

/**
 * Sets up a post with a copyright date block
 * @param {Object} params        - Test parameters
 * @param {Object} params.admin  - WordPress admin utilities
 * @param {Object} params.editor - Editor utilities
 * @param {Object} params.page   - Playwright page object
 */
async function setupPostWithCopyrightBlock( { admin, editor, page } ) {
	// Create new post
	await admin.createNewPost();

	// Get the editor iframe and wait for it to be available
	const editorIframe = page.frameLocator( 'iframe[name="editor-canvas"]' );
	await page
		.locator( 'iframe[name="editor-canvas"]' )
		.waitFor( { state: 'visible' } );

	// Wait for the editor layout inside the iframe
	await editorIframe
		.locator( '.block-editor-block-list__layout' )
		.waitFor( { state: 'visible' } );

	// Insert the block
	await editor.insertBlock( {
		name: 'create-block/copyright-date-block-with-tests',
	} );

	await editor.saveDraft();
}

/**
 * Sets up a post with a copyright date block with a starting year
 * @param {Object} params        - Test parameters
 * @param {Object} params.admin  - WordPress admin utilities
 * @param {Object} params.editor - Editor utilities
 * @param {Object} params.page   - Playwright page object
 * @param {string} startingYear  - Starting year to add to the copyright block
 */
async function setupPostWithStartingYearCopyrightBlock(
	{ admin, editor, page },
	startingYear = '2020'
) {
	await setupPostWithCopyrightBlock( { admin, editor, page } );

	// Get the editor iframe
	const editorIframe = page.frameLocator( 'iframe[name="editor-canvas"]' );

	// Find the copyright block within the iframe
	const copyrightBlock = editorIframe.locator(
		'[data-type="create-block/copyright-date-block-with-tests"]'
	);

	// Wait for block to be available
	await expect( copyrightBlock ).toBeVisible();

	// Select the block
	await editor.selectBlocks( copyrightBlock );

	// Wait briefly to ensure block is selected - this is critical
	await page.waitForTimeout( 300 );

	// Open block settings sidebar using editor utility
	await editor.openDocumentSettingsSidebar();

	// Look for the toggle in the sidebar using the specific component selector
	const showStartingYearToggle = page.locator(
		'.components-toggle-control label:has-text("Show starting year")'
	);
	await expect( showStartingYearToggle ).toBeVisible();

	// Click the toggle
	await showStartingYearToggle.click();

	// Wait for the input field to appear - this is critical
	await page.waitForTimeout( 300 );

	// Find the starting year input using the specific label selector
	const startingYearInput = page.locator(
		'label:has-text("Starting year") + .components-text-control__input'
	);
	await expect( startingYearInput ).toBeVisible();

	// Fill the input
	await startingYearInput.fill( startingYear );

	await editor.saveDraft();
}

/**
 * Gets the frontend URL for a post and navigates to it
 * @param {Object} params      - Test parameters
 * @param {Object} params.page - Playwright page object
 * @param {Object} params.test - Playwright test object
 * @return {Promise<string>} The frontend URL that was navigated to
 */
async function navigateToPostFrontend( { page, test } ) {
	const postId = page.url().match( /post=(\d+)/ )[ 1 ];
	const frontendUrl = `http://localhost:8890/?p=${ postId }`;

	await test.step( `Navigating to frontend URL: ${ frontendUrl }`, async () => {
		await page.goto( frontendUrl, { timeout: 30000 } );
	} );

	return frontendUrl;
}

module.exports = {
	setupPostWithCopyrightBlock,
	setupPostWithStartingYearCopyrightBlock,
	navigateToPostFrontend,
};

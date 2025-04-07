/* eslint-disable import/no-extraneous-dependencies */
// @ts-check
const path = require( 'path' );
const { defineConfig } = require( '@playwright/test' );
const wpScriptsPlaywrightConfig = require( '@wordpress/scripts/config/playwright.config.js' );

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig( {
	...wpScriptsPlaywrightConfig,
	testDir: './test/e2e',
	use: {
		...wpScriptsPlaywrightConfig.use,
		baseURL: process.env.WP_BASE_URL || 'http://localhost:8890',
		storageState: path.join(
			process.cwd(),
			'artifacts/storage-state.json'
		),
	},
} );

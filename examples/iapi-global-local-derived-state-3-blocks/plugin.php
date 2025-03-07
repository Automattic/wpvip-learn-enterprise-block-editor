<?php
/**
 * Plugin Name:       Iapi Global Local Derived State - 3 blocks
 * Description:       An interactive block with the Interactivity API.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       iapi-global-local-derived-state
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_iapi_global_local_derived_state_block_init() {
	$folders = array(
		'iapi-global-derived-state-main',
		'iapi-local-state',
		'iapi-global-local-state',
	);

	foreach ( $folders as $folder ) {
		register_block_type_from_metadata( __DIR__ . '/build/' . $folder );
	}
}
add_action( 'init', 'create_block_iapi_global_local_derived_state_block_init' );

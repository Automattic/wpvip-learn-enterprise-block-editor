<?php
/**
 * Handles script and style enqueuing for the review system.
 *
 * @package ReviewSystem
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueues the necessary scripts and styles for the review system.
 * 
 * @return void
 */
function review_system_enqueue_scripts() {
	$current_user = wp_get_current_user();
	
	$asset_file = require plugin_dir_path( __DIR__ ) . 'build/index.asset.php';
	wp_enqueue_script(
		'review-system-script',
		plugins_url( 'build/index.js', __DIR__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	// Pass current user info to JavaScript.
	wp_localize_script(
		'review-system-script',
		'reviewSystemData',
		array(
			'currentUser' => array(
				'id'   => $current_user->ID,
				'name' => $current_user->display_name,
			),
		) 
	);
}
add_action( 'enqueue_block_editor_assets', 'review_system_enqueue_scripts' );

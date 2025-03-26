<?php
/**
 * Plugin Name:       Script Modules Editor
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       script-modules
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Enqueue the block editor assets.
 */
function wpviplearn_editor_assets_modules() {
	$plugin_url = plugin_dir_url( __FILE__ );
	
	wp_register_script_module( 
		'@wpviplearn/reading-time-panel', 
		$plugin_url . 'build/ReadingTimePanel.js'
	);
	wp_register_script_module( 
		'@wpviplearn/copy-block-json', 
		$plugin_url . 'build/CopyBlockAsJsonMenuItem.js'
	);
	wp_register_script_module( 
		'@wpviplearn/some-return', 
		$plugin_url . 'build/SomeReturn.js'
	);


	$dependencies = [
		'@wpviplearn/reading-time-panel',
		array(
			'id'     => '@wpviplearn/copy-block-json',
			'import' => 'dynamic',
		),
		array(
			'id'     => '@wpviplearn/some-return',
			'import' => 'dynamic',
		),
	];
	
	wp_enqueue_script_module( 
		'@wpviplearn/editor', 
		$plugin_url . 'build/index.js', 
		$dependencies 
	);
}
	
add_action( 'enqueue_block_editor_assets', 'wpviplearn_editor_assets_modules' );

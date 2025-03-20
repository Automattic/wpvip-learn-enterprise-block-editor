<?php
/**
 * Plugin Name:       Script Modules View
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       script-modules-view
 *
 * @package CreateBlock
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
function create_block_script_modules_view_block_init() {

	$plugin_url = plugin_dir_url( __FILE__ );

	wp_register_script_module( 'module-1', $plugin_url . 'assets/js/module1.js' );
	wp_register_script_module( 'module-2', $plugin_url . 'assets/js/module2.js' );
	wp_register_script_module( 'module-3', $plugin_url . 'assets/js/module3.js' );

	$dependencies = [
		[
			'id'     => 'module-1',
			'import' => 'static',
		],
		[
			'id'     => 'module-2',
			'import' => 'static',
		],
		[
			'id'     => 'module-3',
			'import' => 'static',
		],
	];

	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_script_modules_view_block_init' );

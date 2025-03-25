<?php
/**
 * Plugin Name:       Script Modules
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
 * Register the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type_from_metadata/
 */
function create_block_script_modules_block_init() {
	register_block_type_from_metadata( __DIR__ . '/build/' );
}
add_action( 'init', 'create_block_script_modules_block_init' );

/**
 * Render the block.
 *
 * @param string $content The block content.
 * @return string The block content.
 */
add_filter(
	'render_block_create-block/script-modules-block-manual',
	function ( $content ) {
		if ( is_admin() ) {
			return $content;
		}

		$plugin_url = plugin_dir_url( __FILE__ );

		wp_register_script_module( 'module-1', $plugin_url . 'assets/js/module1.js' );
		wp_register_script_module( 'module-2', $plugin_url . 'assets/js/module2.js' );
		wp_register_script_module( 'module-3', $plugin_url . 'assets/js/module3.js' );

		$dependencies = [
			'module-1',
			array(
				'id'     => 'module-2',
				'import' => 'dynamic', /* Marks as dynamically imported */
			),
			array(
				'id'     => 'module-3',
				'import' => 'dynamic',
			),
		];

		wp_enqueue_script_module( 'initialize', $plugin_url . 'assets/js/initialize.js', $dependencies );
		wp_enqueue_script( 'jquery' );
		
		return $content;
	}
);

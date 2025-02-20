<?php
/**
 * Plugin Name:       Wp Vip Learn Inspector Controls Filter Block Edit
 * Plugin URI:        https://developer.wordpress.org/news
 * Description:       Exploring the Slot Fills API in the editor.
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Your Name
 * Author URI:        https://developer.wordpres.org/news
 * Text Domain:       wpviplearn
 *
 * @package CreateBlock
 */

add_action( 'enqueue_block_editor_assets', 'wpviplearn_editor_assets' );

/**
 * Enqueue the editor assets.
 */
function wpviplearn_editor_assets() {
	$dir = untrailingslashit( plugin_dir_path( __FILE__ ) );
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	if ( file_exists( "{$dir}/build/js/editor.asset.php" ) ) {
		$asset = include "{$dir}/build/js/editor.asset.php";

		wp_enqueue_script(
			'wpviplearn-slot-fills',
			"{$url}/build/js/editor.js",
			$asset['dependencies'],
			$asset['version'],
			true
		);

		wp_set_script_translations( 'wpviplearn-slot-fills', 'wpviplearn' );
	}
}

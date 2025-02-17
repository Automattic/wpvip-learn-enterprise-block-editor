<?php
/**
 * Plugin Name:       Wp Vip Learn Unregister Block Variations 
 * Plugin URI:        https://developer.wordpress.org/news
 * Description:       Exploring the Block Variations API in the editor.
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
	wp_enqueue_script(
		'wpviplearn-block-variations',
		plugins_url( 'resources/js/editor.js', __FILE__ ),
		array(
			'wp-blocks',
			'wp-hooks',
			'wp-dom-ready',
			'wp-i18n',
		),
		wp_get_theme()->get( 'Version' ),
		true
	);
}

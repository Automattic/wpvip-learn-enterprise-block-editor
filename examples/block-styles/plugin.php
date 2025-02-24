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

add_action( 'init', 'wpviplearn_register_block_styles' );

/**
 * Registers custom block styles on the `init` hook.
 *
 * @since 1.0.0
 * @link  https://developer.wordpress.org/reference/functions/register_block_style/
 */
function wpviplearn_register_block_styles() {
	register_block_style(
		'core/image',
		array(
			'name'         => 'hand-drawn-php',
			'label'        => __( 'Hand Drawn PHP', 'example-block-style-php' ),
			'inline_style' => '.wp-block-image.is-style-hand-drawn-php img {
			color: inherit;
			border: 2px solid currentColor;
			overflow: hidden;
			box-shadow: 0 1px 2px 0 rgb( 0 0 0 / 0.05 );
			border-radius: 255px 15px 225px 15px/15px 225px 15px 255px !important;
			transform: rotate(-2deg);
			padding: 20px;
		}',
		) 
	);
}


add_action( 'enqueue_block_editor_assets', 'wpviplearn_editor_assets' );

/**
 * EnqueueEditor scripts and styles
 */
function wpviplearn_editor_assets() {

	$dir = untrailingslashit( plugin_dir_path( __FILE__ ) );
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	if ( file_exists( "{$dir}/build/index.asset.php" ) ) {
		$asset = include "{$dir}/build/index.asset.php";

		wp_enqueue_script(
			'wpviplearn-inspector-controls-filter-block-edit',
			"{$url}/build/index.js",
			$asset['dependencies'],
			$asset['version'],
			true
		);

		wp_set_script_translations( 'wpviplearn-inspector-controls-filter-block-edit', 'wpviplearn' );
	}
}


add_action( 'enqueue_block_assets', 'wpviplearn_block_assets' );

/**
 * Enqueue Editor content scripts and styles.
 */
function wpviplearn_block_assets() {

	$dir = untrailingslashit( plugin_dir_path( __FILE__ ) );
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	if ( file_exists( "{$dir}/build/index.css" ) ) {

		wp_enqueue_style(
			'wpviplearn-inspector-controls-filter-block-edit',
			"{$url}/build/index.css",
			array(),
			filemtime( "{$dir}/build/index.css" )
		);
	}
}

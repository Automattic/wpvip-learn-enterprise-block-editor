<?php
/**
 * Plugin Name:       Dev Blog Editor Bindings
 * Plugin URI:        https://developer.wordpress.org/news
 * Description:       Exploring the Block Bindings API in the editor.
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Your Name
 * Author URI:        https://developer.wordpres.org/news
 * Text Domain:       devblog
 *
 * @package CreateBlock
 */

add_action( 'init', 'devblog_register_binding_sources' );

/**
 * Register the block bindings sources.
 */
function devblog_register_binding_sources() {
	register_block_bindings_source(
		'devblog/post-data',
		[
			'label'              => __( 'Post Data', 'devblog' ),
			'get_value_callback' => 'devblog_post_data_callback',
			'uses_context'       => [ 'postId' ],
		]
	);
}

/**
 * Get the post data callback.
 *
 * @param array  $args The arguments.
 * @param array  $block The block.
 * @param string $name The name.
 */
function devblog_post_data_callback( $args, $block, $name ) {
	if ( ! isset( $args['key'] ) ) {
		return null;
	}

	$post_id = $block->context['postId'] ?? get_the_ID();

	if ( 'title' === $args['key'] ) {
		return get_post_field( 'post_title', $post_id );
	} elseif ( 'excerpt' === $args['key'] ) {
		return get_post_field( 'post_excerpt', $post_id );
	} elseif ( 'permalink' === $args['key'] ) {
		return get_permalink( $post_id );
	}

	return null;
}

add_action( 'enqueue_block_editor_assets', 'devblog_editor_assets' );

/**
 * Enqueue the editor assets.
 */
function devblog_editor_assets() {
	$dir = untrailingslashit( plugin_dir_path( __FILE__ ) );
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	if ( file_exists( "{$dir}/build/js/editor.asset.php" ) ) {
		$asset = include "{$dir}/build/js/editor.asset.php";

		wp_enqueue_script(
			'devblog-editor-bindings',
			"{$url}/build/js/editor.js",
			$asset['dependencies'],
			$asset['version'],
			true
		);

		wp_set_script_translations( 'devblog-editor-bindings', 'devblog' );
	}
}

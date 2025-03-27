<?php
/**
 * Plugin Name:       IAPI Core Blocks Inner Blocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       iapi-core-blocks-inner-blocks
 *
 * @package           iapi-core-blocks-inner-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function iapi_core_blocks_inner_blocks__register_block() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'iapi_core_blocks_inner_blocks__register_block' );

/**
 * Render block core/button.
 *
 * @param string $block_content Block content.
 * @param array  $block Block.
 * @return string
 */
function iapi_core_blocks_inner_blocks__render_block_core_button( $block_content, $block ) {
	if ( ! isset( $block['attrs']['className'] ) || ! str_contains(
		$block['attrs']['className'],
		'interactive-block--button-play' 
	) ) {
		return $block_content;
	}

	$p = new WP_HTML_Tag_Processor( $block_content );
	$p->next_tag();

	$p->set_attribute( 'data-wp-on--click', 'actions.playOrStop' );
		// Find the link tag inside the button.
	if ( $p->next_tag( array( 'tag_name' => 'a' ) ) ) {
		$p->set_attribute( 'data-wp-text', 'context.buttonText' );
	}
	return $p->get_updated_html();
}

add_filter( 'render_block_core/button', 'iapi_core_blocks_inner_blocks__render_block_core_button', 10, 2 );

/**
 * Render block core/video.
 *
 * @param string $block_content Block content.
 * @param array  $block Block.
 * @return string
 */
function iapi_core_blocks_inner_blocks__render_block_core_video( $block_content, $block ) {
	if ( ! isset( $block['attrs']['className'] ) || ! str_contains(
		$block['attrs']['className'],
		'interactive-block--video' 
	) ) {
		return $block_content;
	}

	$p = new WP_HTML_Tag_Processor( $block_content );
	$p->next_tag();

	$p->set_attribute( 'data-wp-watch', 'callbacks.playOrStopVideo' );
	return $p->get_updated_html();
}

add_filter( 'render_block_core/video', 'iapi_core_blocks_inner_blocks__render_block_core_video', 10, 2 );

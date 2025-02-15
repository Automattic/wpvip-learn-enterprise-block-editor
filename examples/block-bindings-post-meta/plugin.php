<?php
/**
 * Plugin Name:       Block Bindings Post Meta
 * Description:       Block Bindings Post Meta
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wpviplearn
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'init', 'projectslug_register_meta' );

/**
 * Register meta for the post type.
 */
function projectslug_register_meta() {
	register_meta(
		'post',
		'projectslug_mood',
		array(
			'show_in_rest'      => true,
			'single'            => true,
			'type'              => 'string',
			'sanitize_callback' => 'wp_strip_all_tags',
		)
	);
}

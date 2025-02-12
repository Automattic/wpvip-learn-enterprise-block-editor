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
 * Text Domain:       block-bindings
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'init', 'projectslug_register_block_bindings' );

/**
 * Register the block bindings source.
 */
function projectslug_register_block_bindings() {
	register_block_bindings_source(
		'projectslug/user-data',
		array(
			'label'              => __( 'User Data', 'projectslug' ),
			'get_value_callback' => 'projectslug_user_data_bindings',
		) 
	);
}

/**
 * Get the user data bindings.
 *
 * @param array $source_args The source arguments.
 * @return string|null The user data bindings.
 */
function projectslug_user_data_bindings( $source_args ) {
	// If no key or user ID argument is set, bail early.
	if ( ! isset( $source_args['key'] ) || ! isset( $source_args['userId'] ) ) {
		return null;
	}

	// Get the user ID.
	$user_id = absint( $source_args['userId'] );

	// Return null if there's no user ID at all.
	if ( 0 >= $user_id ) {
		return null;
	}

	// Return the data based on the key argument.
	switch ( $source_args['key'] ) {
		case 'name':
			return esc_html( get_the_author_meta( 'display_name', $user_id ) );
		case 'description':
			return get_the_author_meta( 'description', $user_id );
		case 'avatar':
			return esc_url( get_avatar_url( $user_id ) );
		default:
			return null;
	}
}

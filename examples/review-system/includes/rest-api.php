<?php
/**
 * Handles REST API functionality for the review system.
 *
 * @package ReviewSystem
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registers the REST API endpoints for the review system.
 * 
 * @return void
 */
function review_system_rest_api_init() {
	register_rest_route(
		'review-system/v1',
		'/review/(?P<id>\d+)',
		array(
			array(
				'methods'             => 'GET',
				'callback'            => 'review_system_get_review',
				'permission_callback' => function () {
					return current_user_can( 'edit_posts' );
				},
			),
			array(
				'methods'             => 'POST',
				'callback'            => 'review_system_handle_review',
				'permission_callback' => function () {
					return current_user_can( 'edit_posts' );
				},
			),
			array(
				'methods'             => 'DELETE',
				'callback'            => 'review_system_clear_history',
				'permission_callback' => function () {
					return current_user_can( 'edit_posts' );
				},
			),
		)
	);
}
add_action( 'rest_api_init', 'review_system_rest_api_init' );

/**
 * Get the review status and log for a post.
 *
 * @param WP_REST_Request $request Request object.
 * @return WP_REST_Response|WP_Error Response object or WP_Error on failure.
 */
function review_system_get_review( $request ) {
	$post_id = $request['id'];
	
	$status = get_post_meta( $post_id, '_review_system_status', true );
	$log = get_post_meta( $post_id, '_review_system_log', true );
	
	if ( ! is_array( $log ) ) {
		$log = array();
	}

	return rest_ensure_response(
		array(
			'status' => $status,
			'log'    => $log,
		) 
	);
}

/**
 * Handle review status update for a post.
 *
 * @param WP_REST_Request $request Request object.
 * @return WP_REST_Response|WP_Error Response object or WP_Error on failure.
 */
function review_system_handle_review( $request ) {
	$post_id = $request['id'];
	$status = $request['status'];
	$user_id = ! empty( $request['user_id'] ) ? $request['user_id'] : get_current_user_id();
	$user_name = ! empty( $request['user_name'] ) ? $request['user_name'] : wp_get_current_user()->display_name;
	$timestamp = current_time( 'mysql' );

	if ( ! in_array( $status, array( 'ready_for_review', 'approved' ) ) ) {
		return new WP_Error( 'invalid_status', 'Invalid status', array( 'status' => 400 ) );
	}

	update_post_meta( $post_id, '_review_system_status', $status );

	// Get existing log.
	$log = get_post_meta( $post_id, '_review_system_log', true );
	if ( ! is_array( $log ) ) {
		$log = array();
	}

	// Add new log entry.
	$log[] = array(
		'status'    => $status,
		'user_id'   => $user_id,
		'user_name' => $user_name,
		'timestamp' => $timestamp,
	);

	// Update the log.
	update_post_meta( $post_id, '_review_system_log', $log );

	return rest_ensure_response(
		array(
			'status' => $status,
			'log'    => $log,
		)
	);
}

/**
 * Clear the review history for a post.
 *
 * @param WP_REST_Request $request Request object.
 * @return WP_REST_Response|WP_Error Response object or WP_Error on failure.
 */
function review_system_clear_history( $request ) {
	$post_id = $request['id'];
	
	// Clear the log but keep the current status.
	$status = get_post_meta( $post_id, '_review_system_status', true );
	update_post_meta( $post_id, '_review_system_log', array() );

	return rest_ensure_response(
		array(
			'status' => $status,
			'log'    => array(),
		)
	);
}

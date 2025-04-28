<?php
/**
 * WP.org Plugin Query class for Remote Data Blocks
 *
 * @package MyTheme
 */

namespace MyTheme\RemoteData;

use Automattic\Remote_Data_Blocks\Query\HTTP_Query;
use WP_Error;

/**
 * Custom Query class for fetching specific plugin data from the WordPress.org API.
 */
class WpOrg_Plugin_Query extends HTTP_Query {


	/**
	 * Unique name (slug) for this query. Used internally.
	 *
	 * @var string
	 */
	protected $name = 'mytheme-wporg-plugin-info';

	/**
	 * Name shown in the UI when selecting a source for binding.
	 *
	 * @var string
	 */
	protected $title = 'Plugin Info by Slug (WP.org)';

	/**
	 * ID of the Data Source to use (must be set up in WP Admin).
	 * Assumes an HTTP source named 'wporg-plugin-api' pointing to https://api.wordpress.org/.
	 *
	 * @var string
	 */
	protected $data_source_id = 'wporg-plugin-api'; // Adjust if your Data Source name is different.

	/**
	 * Define the format of the data returned by this query.
	 * Crucial for making fields available in the Block Bindings UI.
	 *
	 * @return array Schema definition.
	 */
	public function get_schema(): array {
		// Based on the structure from https://api.wordpress.org/plugins/info/1.0/{slug}.json.
		return [
			'type'       => 'object',
			'properties' => [
				'name'              => [
					'type'        => 'string',
					'description' => 'Plugin Name',
				],
				'slug'              => [
					'type'        => 'string',
					'description' => 'Plugin Slug',
				],
				'version'           => [
					'type'        => 'string',
					'description' => 'Current Version',
				],
				'author'            => [
					'type'        => 'string',
					'description' => 'Plugin Author Info (HTML string)',
				],
				'rating'            => [
					'type'        => 'number',
					'description' => 'Average Rating (out of 100)',
				],
				'num_ratings'       => [
					'type'        => 'integer',
					'description' => 'Number of Ratings',
				],
				'downloaded'        => [
					'type'        => 'integer',
					'description' => 'Download Count',
				],
				'last_updated'      => [
					'type'        => 'string',
					'description' => 'Last Updated Timestamp (YYYY-MM-DD HH:MM:SS)',
					'format'      => 'date-time',
				],
				'short_description' => [
					'type'        => 'string',
					'description' => 'Short Description',
				],
				// Add other fields as needed, like 'homepage', 'requires', 'tested', etc.
			],
		];
	}

	/**
	 * Modify the request arguments before fetching data.
	 * Dynamically builds the API path using the 'plugin_slug' parameter.
	 *
	 * @param array $request_args Default request details.
	 * @param array $query_params Parameters passed to the query (expecting 'plugin_slug').
	 * @return array|WP_Error Modified request details or WP_Error if slug is missing.
	 */
	protected function get_request_args( array $request_args, array $query_params = [] ) {
		if ( empty( $query_params['plugin_slug'] ) ) {
			// If no slug is provided, we cannot make a valid request.
			// Returning an error prevents the HTTP call.
			return new WP_Error(
				'missing_plugin_slug',
				__( 'Plugin slug is required.', 'my-theme' )
			);
		}

		$plugin_slug = sanitize_key( $query_params['plugin_slug'] );

		// Dynamically set the API path.
		$request_args['path'] = '/plugins/info/1.0/' . $plugin_slug . '.json';

		$request_args['method'] = 'GET';

		// The parent method merges defaults, etc.
		return parent::get_request_args( $request_args, $query_params );
	}

	/**
	 * Process the response data after getting it.
	 * (Optional: Could be used for cleanup or further transformation if needed).
	 *
	 * @param mixed $data Raw data from the HTTP response.
	 * @param array $query_params Parameters passed to the query.
	 * @return mixed Processed data matching the schema.
	 */
	protected function process_response( $data, array $query_params = [] ) {
		$processed_data = parent::process_response( $data, $query_params );

		// Example: Maybe strip HTML from author string if needed for certain bindings.
		// if ( isset( $processed_data['author'] ) ) {
		// $processed_data['author_clean'] = wp_strip_all_tags( $processed_data['author'] );
		// }.

		// Ensure data generally matches the schema.
		// Note: If the API returns an error (e.g., slug not found), $processed_data might.
		// contain error details or be null, depending on HTTP_Query handling.

		return $processed_data; // This data becomes available for block binding.
	}
}

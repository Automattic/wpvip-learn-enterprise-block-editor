<?php
/**
 * Plugin Name: WP.org Plugin Info RDB Example
 * Description: Creates a custom block to be used with Remote Data Blocks in order to retrieve plugin information from WordPress.org.
 * Author: WPVIP
 * Author URI: https://remotedatablocks.com/
 * Text Domain: remote-data-blocks
 * Version: 1.0.0
 * Requires Plugins: remote-data-blocks
 *
 * @package RemoteDataBlocks
 */

namespace RemoteDataBlocks\Example\WpOrgPlugin;

use RemoteDataBlocks\Config\DataSource\HttpDataSource;
use RemoteDataBlocks\Config\Query\HttpQuery;

define( 'EXAMPLE_WPORG_PLUGIN_DATA_SOURCE_UUID', 'ee0dbb0b-ebe5-4097-8cdd-bcd2e5d02b95' );

/**
 * Registers a custom block to retrieve plugin information from WordPress.org.
 *
 * @return void
 */
function register_wporg_plugin_block() {
	if ( ! defined( 'EXAMPLE_WPORG_PLUGIN_DATA_SOURCE_UUID' ) ) {
		return;
	}

	$plugin_data_source = HttpDataSource::from_uuid( EXAMPLE_WPORG_PLUGIN_DATA_SOURCE_UUID );

	if ( ! $plugin_data_source instanceof HttpDataSource ) {
		return;
	}

	$plugin_query = HttpQuery::from_array(
		array(
			'data_source'   => $plugin_data_source,
			'endpoint'      => function ( $input_variables ) use ( $plugin_data_source ) {
				return $plugin_data_source->get_endpoint() . '/plugins/info/1.0/' . $input_variables['plugin_slug'] . '.json';
			},
			'input_schema'  => array(
				'plugin_slug' => array(
					'name' => 'Plugin Slug',
					'type' => 'string',
				),
			),
			'output_schema' => array(
				'is_collection' => false,
				'type'          => array(
					'name'              => array(
						'name' => 'Plugin Name',
						'path' => '$.name',
						'type' => 'string',
					),
					'slug'              => array(
						'name' => 'Plugin Slug',
						'path' => '$.slug',
						'type' => 'string',
					),
					'version'           => array(
						'name' => 'Current Version',
						'path' => '$.version',
						'type' => 'string',
					),
					'author'            => array(
						'name' => 'Plugin Author',
						'path' => '$.author',
						'type' => 'string',
					),
					'rating'            => array(
						'name' => 'Average Rating',
						'path' => '$.rating',
						'type' => 'number',
					),
					'num_ratings'       => array(
						'name' => 'Number of Ratings',
						'path' => '$.num_ratings',
						'type' => 'integer',
					),
					'downloaded'        => array(
						'name' => 'Download Count',
						'path' => '$.downloaded',
						'type' => 'integer',
					),
					'last_updated'      => array(
						'name' => 'Last Updated',
						'path' => '$.last_updated',
						'type' => 'string',
					),
					'short_description' => array(
						'name' => 'Short Description',
						'path' => '$.short_description',
						'type' => 'string',
					),
				),
			),
		)
	);

	register_remote_data_block(
		array(
			'title'        => 'WP.org Plugin Info',
			'render_query' => array(
				'query' => $plugin_query,
			),
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_wporg_plugin_block' );

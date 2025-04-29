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
use WP_Filesystem_Direct;


/**
 * Registers a custom block to retrieve plugin information from WordPress.org.
 *
 * @return void
 */
function register_wporg_plugin_block(): void {
	$plugin_data_source = HttpDataSource::from_array(
		[
			'service_config' => [
				'__version'       => 1,
				'display_name'    => 'WordPress.org Plugins',
				'endpoint'        => 'https://api.wordpress.org',
				'request_headers' => [
					'Accept' => 'application/json',
				],
			],
		]
	);

	$get_plugin_query = HttpQuery::from_array(
		[
			'data_source'   => $plugin_data_source,
			'endpoint'      => function ( array $input_variables ) use ( $plugin_data_source ): string {
				return sprintf(
					'%s/plugins/info/1.0/%s.json',
					$plugin_data_source->get_endpoint(),
					$input_variables['plugin_slug'] ?? ''
				);
			},
			'input_schema'  => [
				'plugin_slug' => [
					'name' => 'Plugin Slug',
					'type' => 'string',
				],
			],
			'output_schema' => [
				'is_collection' => false,
				'path'          => '$',
				'type'          => [
					'name'              => [
						'name' => 'Plugin Name',
						'path' => '$.name',
						'type' => 'string',
					],
					'slug'              => [
						'name' => 'Plugin Slug',
						'path' => '$.slug',
						'type' => 'string',
					],
					'version'           => [
						'name' => 'Current Version',
						'path' => '$.version',
						'type' => 'string',
					],
					'author'            => [
						'name' => 'Plugin Author',
						'path' => '$.author',
						'type' => 'string',
					],
					'rating'            => [
						'name' => 'Average Rating',
						'path' => '$.rating',
						'type' => 'number',
					],
					'num_ratings'       => [
						'name' => 'Number of Ratings',
						'path' => '$.num_ratings',
						'type' => 'integer',
					],
					'downloaded'        => [
						'name' => 'Download Count',
						'path' => '$.downloaded',
						'type' => 'integer',
					],
					'last_updated'      => [
						'name' => 'Last Updated',
						'path' => '$.last_updated',
						'type' => 'string',
					],
					'short_description' => [
						'name' => 'Short Description',
						'path' => '$.short_description',
						'type' => 'string',
					],
				],
			],
		]
	);

	register_remote_data_block(
		[
			'title'        => 'WP.org Plugin Info',
			'render_query' => [
				'query' => $get_plugin_query,
			],
			'patterns'     => [
				[
					'html'  => file_get_contents( __DIR__ . '/pattern-dotorg-plugin.html' ),
					'title' => 'Pattern Simple',
				],
			],

		]
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_wporg_plugin_block' );

<?php
/**
 * Plugin Name:       My Theme - WP.org Plugin Info Query
 * Description:       Registers a custom Remote Data Blocks query to fetch WordPress.org plugin information by slug.
 * Version:           1.0.0
 * Requires at least: 6.4
 * Requires PHP:      7.4
 * Author:            My Theme Author
 * Author URI:        https://author.example.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-theme
 * Domain Path:       /languages
 * Requires Plugins:  remote-data-blocks
 *
 * @package           MyTheme
 */

namespace MyTheme\RemoteData;

use Automattic\Remote_Data_Blocks\Registry\Query as Query_Registry;

// Include the WpOrg_Plugin_Query class.
require_once __DIR__ . '/class-wporg-plugin-query.php';

/**
 * Register the custom WP.org Plugin Query with the Remote Data Blocks registry.
 *
 * @param Query_Registry $registry The Query Registry instance.
 */
function register_wporg_plugin_query( $registry ) {
	$registry->register( new WpOrg_Plugin_Query() );
}
add_action( 'remote_data_blocks_query_registry_init', __NAMESPACE__ . '\register_wporg_plugin_query' );

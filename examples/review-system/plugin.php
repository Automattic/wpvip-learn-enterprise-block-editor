<?php
/**
 * Plugin Name: Review System
 * Description: A review system for WordPress posts that allows marking posts as "Ready for review" and "Approved".
 * Version: 1.0.0
 * Author: Your Name
 * Text Domain: review-system
 * 
 * @package ReviewSystem
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Plugin configuration and initialization.
 */

// Define plugin constants for easy access throughout the plugin.
define( 'REVIEW_SYSTEM_VERSION', '1.0.0' );
define( 'REVIEW_SYSTEM_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'REVIEW_SYSTEM_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

// Load the required plugin components.
require_once REVIEW_SYSTEM_PLUGIN_DIR . 'includes/enqueue.php';
require_once REVIEW_SYSTEM_PLUGIN_DIR . 'includes/rest-api.php';

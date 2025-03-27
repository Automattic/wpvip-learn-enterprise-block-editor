# Script Modules Block Example

This example demonstrates how to use WordPress Script Modules in a block editor context. It showcases the integration of modern JavaScript modules with WordPress blocks, including the usage of external modules and API interactions.

## Overview

This example block implements a simple view that demonstrates several key features of WordPress Script Modules:

-   Registration and usage of local JavaScript modules
-   Integration with external modules (like Lodash)
-   WordPress API Fetch integration
-   Modern ES modules syntax support

## Key Features

-   **Local Modules**: Demonstrates how to register and use local JavaScript modules (`module1.js`, `module2.js`, `module3.js`)
-   **External Modules**: Shows how to integrate external modules like Lodash using ESM imports
-   **API Integration**: Includes WordPress API Fetch integration for data handling
-   **Modern JavaScript**: Uses ES modules and modern JavaScript features

## Technical Details

### Module Registration

The plugin registers several script modules in `plugin.php`:

```php
wp_register_script_module( 'module-1', $plugin_url . 'assets/js/module1.js' );
wp_register_script_module( 'module-2', $plugin_url . 'assets/js/module2.js' );
wp_register_script_module( 'module-3', $plugin_url . 'assets/js/module3.js' );
wp_register_script_module( 'fetchPosts', $plugin_url . 'assets/js/fetchPosts.js' );
wp_register_script_module( '@lodash/startCase', 'https://esm.run/lodash-es/startCase' );
```

### Requirements

-   WordPress 6.7 or higher
-   PHP 7.4 or higher
-   Modern browser with ES modules support

## Getting Started

1. Clone the repository
2. Navigate to this example directory
3. Run `npm install` to install dependencies
4. Run `npm run build` to build the block
5. Activate the plugin in WordPress

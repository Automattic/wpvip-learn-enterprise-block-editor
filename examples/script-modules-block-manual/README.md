# Script Modules Block Manual Example

This example demonstrates how to manually manage WordPress Script Modules in a block context, showing different ways to load and initialize modules in the frontend. It showcases how to handle module dependencies and dynamic loading in a WordPress block.

## Overview

This example implements a block that demonstrates manual script module management:

-   Manual module registration and initialization
-   Different module loading strategies
-   Frontend-only module loading
-   Module dependency management
-   Integration with jQuery

## Key Features

### 1. Manual Module Management

-   Demonstrates how to manually register and enqueue script modules
-   Shows how to handle module dependencies
-   Illustrates frontend-only module loading

### 2. Multiple Loading Strategies

-   Immediate loading (module-1)
-   Dynamic loading (module-2, module-3)
-   Conditional loading based on context

### 3. Dependency Management

-   Shows how to specify module dependencies
-   Demonstrates different dependency types:
    -   Direct dependencies
    -   Dynamic dependencies
    -   External dependencies (jQuery)

## Technical Details

### Module Registration

The plugin registers several script modules in the block render callback:

```php
wp_register_script_module( 'module-1', $plugin_url . 'assets/js/module1.js' );
wp_register_script_module( 'module-2', $plugin_url . 'assets/js/module2.js' );
wp_register_script_module( 'module-3', $plugin_url . 'assets/js/module3.js' );
```

### Module Dependencies

The example shows how to specify different types of dependencies:

```php
$dependencies = [
    'module-1',  // Direct dependency
    array(
        'id'     => 'module-2',
        'import' => 'dynamic',  // Dynamic dependency
    ),
    array(
        'id'     => 'module-3',
        'import' => 'dynamic',  // Dynamic dependency
    ),
];
```

### Frontend Loading

Modules are only loaded on the frontend, not in the admin:

```php
if ( is_admin() ) {
    return $content;
}
```

## Getting Started

1. Clone the repository
2. Navigate to this example directory
3. Run `npm install` to install dependencies
4. Run `npm run build` to build the block
5. Activate the plugin in WordPress

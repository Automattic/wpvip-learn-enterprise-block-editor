# Script Modules Block Editor Example

This example demonstrates how to use WordPress Script Modules to enhance the block editor with dynamic features and modular code organization. It showcases advanced techniques for loading and managing editor enhancements using modern JavaScript modules.

## Overview

This example implements several block editor enhancements that demonstrate different aspects of WordPress Script Modules:

-   Dynamic loading of editor features
-   Modular code organization
-   Integration with WordPress editor APIs
-   Asynchronous feature loading
-   State management with WordPress data store

## Key Features

### 1. Reading Time Panel

-   Shows estimated reading time in the document sidebar
-   Dynamically loads when the document sidebar becomes active
-   Demonstrates conditional module loading

### 2. Copy Block JSON Feature

-   Adds ability to copy block JSON representation
-   Loads asynchronously after editor initialization
-   Shows delayed module loading

### 3. Dynamic Feature Loading

-   Demonstrates different loading strategies:
    -   Immediate loading
    -   Conditional loading
    -   Delayed loading
-   Uses WordPress data store subscriptions

### 4. Modular Architecture

-   Features are split into separate modules:
    -   `@wpviplearn/reading-time-panel`
    -   `@wpviplearn/copy-block-json`
    -   `@wpviplearn/some-return`
    -   `@wpviplearn/tools`

## Technical Details

### Module Registration

The plugin registers several script modules in `plugin.php`:

```php
wp_register_script_module(
    '@wpviplearn/reading-time-panel',
    $plugin_url . 'build/ReadingTimePanel.js'
);
wp_register_script_module(
    '@wpviplearn/copy-block-json',
    $plugin_url . 'build/CopyBlockAsJsonMenuItem.js'
);
// ... other modules
```

### Loading Strategies

1. **Immediate Loading**:

    ```javascript
    import '@wpviplearn/reading-time-panel';
    ```

2. **Conditional Loading**:

    ```javascript
    if ( currentState === 'edit-post/document' ) {
    	import( '@wpviplearn/reading-time-panel' );
    }
    ```

3. **Delayed Loading**:
    ```javascript
    setTimeout( () => {
    	import( '@wpviplearn/copy-block-json' );
    }, 3000 );
    ```

## Getting Started

1. Clone the repository
2. Navigate to this example directory
3. Run `npm install` to install dependencies
4. Run `npm run build` to build the modules
5. Activate the plugin in WordPress

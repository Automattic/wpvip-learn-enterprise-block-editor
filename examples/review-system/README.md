# Review System Plugin

A WordPress plugin that adds a review system to the block editor, allowing users to mark posts as "Ready for Review" and "Approved".

## Features

-   Adds a review panel to the post editor sidebar
-   Allows marking posts as "Ready for Review" or "Approved"
-   Stores review status in post meta
-   REST API endpoint for managing review status
-   Modern block editor integration

## Installation

1. Clone this repository into your WordPress plugins directory:

    ```bash
    cd wp-content/plugins
    git clone [repository-url] review-system
    ```

2. Install dependencies:

    ```bash
    cd review-system
    npm install
    ```

3. Build the plugin:

    ```bash
    npm run build
    ```

4. Activate the plugin through the WordPress admin panel.

## Usage

1. Edit any post or page in the block editor
2. Look for the "Review Status" panel in the document settings sidebar
3. Use the buttons to mark the post as "Ready for Review" or "Approved"
4. The review status will be saved with the post

## Development

To start development mode:

```bash
npm run start
```

This will watch for changes and rebuild automatically.

## Building for Production

To create a production build:

```bash
npm run build
```

## Requirements

-   WordPress 5.0 or higher
-   Node.js 14.0 or higher
-   npm 6.0 or higher

## License

GPL v2 or later

# Learn VIP Course: Enterprise Block Editor (Gutenberg)

This repository contains examples used in the Learn VIP Course: Enterprise Block Editor (Gutenberg)

## What does it provide?

1. A PHP CodeSniffer configuration that will check your code against the coding standards that are recommended by the Newspack team.
2. A [Prettier](https://prettier.io/) configuration for WordPress.
3. A [Husky](https://typicode.github.io/husky/) configuration to lint local files changes before they are committed.

## How to install the coding standards tools

By running `npm run setup` from the root of the project you'll:

-   Install `package.json` dependencies
-   Install `composer.json` dependencies
-   Initialize and configure husky pre-commit

## Examples

### Module 4: Advanced Block Development

#### Lesson 4.1: Bindings

-   [block-bindings-custom-source](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/block-bindings-custom-source) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/block-bindings-custom-source/_playground/blueprint.json))
-   [block-bindings-post-meta](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/block-bindings-post-meta) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/block-bindings-post-meta/_playground/blueprint.json))
-   [editor-bindings](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/editor-bindings) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/editor-bindings/_playground/blueprint.json))

#### Lesson 4.2: Inner Blocks

-   [inner-blocks](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/inner-blocks) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/inner-blocks/_playground/blueprint.json))

#### Lesson 4.3: Context

-   [context](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/context) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/context/_playground/blueprint.json))

#### Lesson 4.4: Deprecation

-   [deprecation](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/deprecation) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/deprecation/_playground/blueprint.json))

#### Lesson 4.5: Transforms

-   [transforms-filter](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/transforms-filter) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/transforms-filter/_playground/blueprint.json))

#### Lesson 4.6: Block Variations

-   [block-variations](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/block-variations) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/block-variations/_playground/blueprint.json))
-   [block-variations-quote](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/block-variations-quote) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/block-variations-quote/_playground/blueprint.json))
-   [unregister-block-variations](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/unregister-block-variations) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/unregister-block-variations/_playground/blueprint.json))
-   [modify-block-variation](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/modify-block-variation) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/modify-block-variation/_playground/blueprint.json))

### Module 6: Customizing the Editor Experience

#### Lesson 6.1: Custom Block Panels and Inspectors

-   [block-filters-inspector-controls](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/block-filters-inspector-controls) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/block-filters-inspector-controls/_playground/blueprint.json))

#### Lesson 6.2: Slot & Fill System

-   [slot-fills](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/slot-fills) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/slot-fills/_playground/blueprint.json))

#### Lesson 6.3: Block Styles

-   [block-styles](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/block-styles) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/block-styles/_playground/blueprint.json))

#### Lesson 6.4: Editor Filters and Actions

-   [block-filters-block-edit](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/block-filters-block-edit) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/block-filters-block-edit/_playground/blueprint.json))
-   [block-filters-inspector-controls](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/block-filters-inspector-controls) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/block-filters-inspector-controls/_playground/blueprint.json))

#### Lesson 6.5: Using the WordPress VIP Block Governance Plugin

-   [Basic](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/blob/trunk/examples/vip-governance-plugin-demo/basic/governance-rules.json) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/vip-governance-plugin-demo/basic/_playground/blueprint.json)) - A simple configuration limiting the blocks available
-   [Per Role](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/blob/trunk/examples/vip-governance-plugin-demo/per-role/governance-rules.json) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/vip-governance-plugin-demo/per-role/_playground/blueprint.json)) - A simple role-based configuration
-   [Per Post Type](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/blob/trunk/examples/vip-governance-plugin-demo/per-post-type/governance-rules.json) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/vip-governance-plugin-demo/per-post-type/_playground/blueprint.json)) - A post-type-based configuration that includes block settings for specific blocks
-   [Advanced](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/blob/trunk/examples/vip-governance-plugin-demo/advanced/governance-rules.json) ([live demo as author](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/vip-governance-plugin-demo/advanced/_playground/as-author/blueprint.json) [^note] - [live demo as editor](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/vip-governance-plugin-demo/advanced/_playground/as-editor/blueprint.json) [^note]) - An advanced configuration with different rule types and detailed block settings

### Module 7: WordPress Data Layer and wp.data

#### Lesson 7.5: Creating Custom Data Stores

-   [review-system](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/review-system) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/review-system/_playground/blueprint.json))

### Module 8: Interactivity API

#### Lesson 8.2: Implementing the Interactivity API

-   [iapi-global-local-derived-state-block](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/iapi-global-local-derived-state-block) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/iapi-global-local-derived-state-block/_playground/blueprint.json))
-   [iapi-global-local-derived-state-3-blocks](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/iapi-global-local-derived-state-3-blocks) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/iapi-global-local-derived-state-3-blocks/_playground/blueprint.json))

[^note]: These playground demos may not work well directly from the link due to [this issue](https://github.com/WordPress/wordpress-playground/issues/2171). If that's the case try copying and pasting the related `blueprint.json` on [playground.wordpress.net/builder](https://playground.wordpress.net/builder)

### Module 9 Performance and Optimization

#### Lesson 9.1: Optimizing JavaScript for Gutenberg

-   [script-modules-block-manual](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/script-modules-block-manual) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/script-modules-block-manual/_playground/blueprint.json))
-   [script-modules-block-view](https://github.com/Automattic/wpvip-learn-enterprise-block-editor/tree/trunk/examples/script-modules-block-view) ([live demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/Automattic/wpvip-learn-enterprise-block-editor/refs/heads/trunk/examples/script-modules-block-view/_playground/blueprint.json))

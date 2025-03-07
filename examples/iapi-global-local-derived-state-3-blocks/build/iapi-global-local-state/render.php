<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package myFruitPlugin
 */

$local_foods2 = array( 'Salad', 'Soup' );

?>
<?php /* @phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped */ ?>

	
	<div 
		<?php echo get_block_wrapper_attributes(); ?>
		data-wp-interactive="myFruitPlugin"
		<?php echo wp_interactivity_data_wp_context( array( 'foods' => $local_foods2 ) ); ?>
	>
		<h2>Fruits * Foods</h2>
		<h3>Loop Local inside Loop Global</h3>
		<ul>
			<template data-wp-each--primary="state.fruits">	
				<template data-wp-each--secondary="context.foods">	
					<li><strong class="primary-fruits" data-wp-text="context.primary"></strong> <em class="secondary-foods" data-wp-text="context.secondary"></em></li>
				</template>
			</template>
		</ul>
	</div>
	
<?php /* @phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped */ ?>

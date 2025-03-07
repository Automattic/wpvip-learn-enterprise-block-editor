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

$local_foods = array( 'Pie', 'Smoothie' );

?>
<?php /* @phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped */ ?>

	
	<div 
		<?php echo get_block_wrapper_attributes(); ?>
		data-wp-interactive="myFruitPlugin"
		<?php echo wp_interactivity_data_wp_context( array( 'foods' => $local_foods ) ); ?>
		
	>
		<h2><span data-wp-text="state.numberOfFoods"></span> Foods (Local State)</h2>
		<ul>
			<template data-wp-each="context.foods">
				<li class="secondary-foods" data-wp-text="context.item"></li>
			</template>
		</ul>
		<button data-wp-bind--disabled="!state.randomLocalFood" data-wp-on-async--click="actions.addFoodLocal">Add food (Local)</button>
		<p>Extra Foods left: <em data-wp-text="state.numberOfFoodsLeft"></em></p>
	</div>
	
	
</div>
<?php /* @phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped */ ?>

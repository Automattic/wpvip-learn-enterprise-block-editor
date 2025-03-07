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

$global_fruits = array( 'Apple', 'Banana' );
$local_foods = array( 'Pie', 'Smoothie' );
$local_foods2 = array( 'Salad', 'Soup' );

// Adds the global state.
wp_interactivity_state(
	'myFruitPlugin',
	array(
		'fruits' => $global_fruits,
	)
);
?>
<?php /* @phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped */ ?>
<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="myFruitPlugin"
>
	<div class="three-columns">
	<div> 
		<h2><span data-wp-text="state.numberOfFruits"></span> Fruits (Global State)</h2>
		<ul>
			<template data-wp-each="state.fruits">
				<li class="primary-fruits" data-wp-text="context.item"></li>
			</template>
		</ul>
		<button data-wp-bind--disabled="!state.randomGlobalFruit" data-wp-on-async--click="actions.addFruitGlobal">Add fruit (Global)</button>
		<p>Extra Fruits left: <em data-wp-text="state.numberOfFruitsLeft"></em></p>
	</div>
	<div 
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
	
	
	<div>
		<h2>Fruits * Foods</h2>
		<h3>Loop Local inside Loop Global</h3>
		<ul <?php echo wp_interactivity_data_wp_context( array( 'foods' => $local_foods2 ) ); ?>>
			<template data-wp-each--primary="state.fruits">	
				<template data-wp-each--secondary="context.foods">	
					<li><strong class="primary-fruits" data-wp-text="context.primary"></strong> <em class="secondary-foods" data-wp-text="context.secondary"></em></li>
				</template>
			</template>
		</ul>
	</div>
	
	</div>
</div>
<?php /* @phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped */ ?>

/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const extraFruit = [ 'Cherry', 'Mango', 'Pineapple', 'Orange' ];
const extraFruitFood = [ 'Juice', 'Ice Cream', 'Cake' ];

const getRandomElement = ( elements ) => {
	return elements[ Math.floor( Math.random() * elements.length ) ];
};

const { state } = store( 'myFruitPlugin', {
	state: {
		get numberOfFruitsLeft() {
			return extraFruit.filter(
				( fruit ) => ! state.fruits.includes( fruit )
			).length;
		},
		get numberOfFoodsLeft() {
			const context = getContext();
			return extraFruitFood.filter(
				( food ) => ! context.foods.includes( food )
			).length;
		},
		get numberOfFruits() {
			return state.fruits.length;
		},
		get numberOfFoods() {
			const context = getContext();
			return context.foods.length;
		},
		get randomGlobalFruit() {
			const extraFruitNotInState = extraFruit.filter(
				( fruit ) => ! state.fruits.includes( fruit )
			);
			return getRandomElement( extraFruitNotInState );
		},
		get randomLocalFood() {
			const context = getContext();
			const extraFoodNotInState = extraFruitFood.filter(
				( food ) => ! context.foods.includes( food )
			);
			return getRandomElement( extraFoodNotInState );
		},
		get randomCurrentGlobalFruit() {
			return getRandomElement( state.fruits );
		},
		get randomCurrentLocalFood() {
			const context = getContext();
			return getRandomElement( context.foods );
		},
	},
	actions: {
		// add to global state random fruit
		addFruitGlobal() {
			if ( state.randomGlobalFruit ) {
				state.fruits.push( state.randomGlobalFruit );
			}
		},
		// add to local state random fruit
		addFoodLocal() {
			const context = getContext();
			if ( state.randomLocalFood ) {
				context.foods.push( state.randomLocalFood );
			}
		},
	},
} );

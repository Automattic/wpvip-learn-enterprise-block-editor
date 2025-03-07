import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/iapi-local-state/view.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */

const extraFruit = ['Cherry', 'Mango', 'Pineapple', 'Orange'];
const extraFruitFood = ['Juice', 'Ice Cream', 'Cake'];
const getRandomElement = elements => {
  return elements[Math.floor(Math.random() * elements.length)];
};
const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('myFruitPlugin', {
  state: {
    get numberOfFruitsLeft() {
      return extraFruit.filter(fruit => !state.fruits.includes(fruit)).length;
    },
    get numberOfFoodsLeft() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return extraFruitFood.filter(food => !context.foods.includes(food)).length;
    },
    get numberOfFruits() {
      return state.fruits.length;
    },
    get numberOfFoods() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return context.foods.length;
    },
    get randomGlobalFruit() {
      const extraFruitNotInState = extraFruit.filter(fruit => !state.fruits.includes(fruit));
      return getRandomElement(extraFruitNotInState);
    },
    get randomLocalFood() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const extraFoodNotInState = extraFruitFood.filter(food => !context.foods.includes(food));
      return getRandomElement(extraFoodNotInState);
    },
    get randomCurrentGlobalFruit() {
      return getRandomElement(state.fruits);
    },
    get randomCurrentLocalFood() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return getRandomElement(context.foods);
    }
  },
  actions: {
    // add to global state random fruit
    addFruitGlobal() {
      if (state.randomGlobalFruit) {
        state.fruits.push(state.randomGlobalFruit);
      }
    },
    // add to local state random fruit
    addFoodLocal() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (state.randomLocalFood) {
        context.foods.push(state.randomLocalFood);
      }
    }
  }
});
})();


//# sourceMappingURL=view.js.map
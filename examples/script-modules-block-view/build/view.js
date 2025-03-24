import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
import * as __WEBPACK_EXTERNAL_MODULE_https_esm_run_lodash_es_camelCase_0689a460__ from "https://esm.run/lodash-es/camelCase";
/******/ var __webpack_modules__ = ({

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/* harmony import */ var module_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! module-1 */ "module-1");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([module_1__WEBPACK_IMPORTED_MODULE_1__]);
module_1__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable no-console, import/no-unresolved */


(0,module_1__WEBPACK_IMPORTED_MODULE_1__.moduleOne)();
setTimeout(async () => {
  try {
    const module = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! module-2 */ "module-2"));
    const {
      moduleTwo
    } = module;
    moduleTwo();
  } catch (error) {
    console.error('Error loading module-2:', error);
  }
}, 2000);
const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('script-modules-block-view', {
  state: {
    text: 'Hello World',
    clicked: false,
    color: () => state.clicked ? 'red' : 'blue'
  },
  actions: {
    *loadModule() {
      try {
        // because we have registered this module, the build process
        // knows how to treat this module, and mark it as dynamic import
        // so the loading will be deferred until this action is called.
        const {
          default: startCase
        } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @lodash/startCase */ "@lodash/startCase"));
        const module = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! module-3 */ "module-3"));
        const {
          moduleThree
        } = module;
        const value = moduleThree();
        state.text = startCase(value);
        state.clicked = true;

        // because we haven't registered this module, the build process
        // converts this call into a static import and load it from the beginning.
        const {
          default: camelCase
        } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! https://esm.run/lodash-es/camelCase */ "https://esm.run/lodash-es/camelCase"));
        console.log(camelCase('__FOO_BAR__'));
        const {
          fetchPosts,
          newPost
        } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! fetchPosts */ "fetchPosts"));
        const posts = yield fetchPosts();
        console.log('Posts:', posts);
        const newPostResponse = yield newPost();
        console.log('New post:', newPostResponse);
      } catch (error) {
        console.error('Error loading module-3:', error);
      }
    }
  }
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "@lodash/startCase":
/*!************************************!*\
  !*** external "@lodash/startCase" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("@lodash/startCase");;

/***/ }),

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ }),

/***/ "fetchPosts":
/*!*****************************!*\
  !*** external "fetchPosts" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("fetchPosts");;

/***/ }),

/***/ "https://esm.run/lodash-es/camelCase":
/*!******************************************************!*\
  !*** external "https://esm.run/lodash-es/camelCase" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_https_esm_run_lodash_es_camelCase_0689a460__;

/***/ }),

/***/ "module-1":
/*!***************************!*\
  !*** external "module-1" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("module-1");;

/***/ }),

/***/ "module-2":
/*!***************************!*\
  !*** external "module-2" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("module-2");;

/***/ }),

/***/ "module-3":
/*!***************************!*\
  !*** external "module-3" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("module-3");;

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
/******/ /* webpack/runtime/async module */
/******/ (() => {
/******/ 	var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 	var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 	var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 	var resolveQueue = (queue) => {
/******/ 		if(queue && queue.d < 1) {
/******/ 			queue.d = 1;
/******/ 			queue.forEach((fn) => (fn.r--));
/******/ 			queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 		}
/******/ 	}
/******/ 	var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 		if(dep !== null && typeof dep === "object") {
/******/ 			if(dep[webpackQueues]) return dep;
/******/ 			if(dep.then) {
/******/ 				var queue = [];
/******/ 				queue.d = 0;
/******/ 				dep.then((r) => {
/******/ 					obj[webpackExports] = r;
/******/ 					resolveQueue(queue);
/******/ 				}, (e) => {
/******/ 					obj[webpackError] = e;
/******/ 					resolveQueue(queue);
/******/ 				});
/******/ 				var obj = {};
/******/ 				obj[webpackQueues] = (fn) => (fn(queue));
/******/ 				return obj;
/******/ 			}
/******/ 		}
/******/ 		var ret = {};
/******/ 		ret[webpackQueues] = x => {};
/******/ 		ret[webpackExports] = dep;
/******/ 		return ret;
/******/ 	}));
/******/ 	__webpack_require__.a = (module, body, hasAwait) => {
/******/ 		var queue;
/******/ 		hasAwait && ((queue = []).d = -1);
/******/ 		var depQueues = new Set();
/******/ 		var exports = module.exports;
/******/ 		var currentDeps;
/******/ 		var outerResolve;
/******/ 		var reject;
/******/ 		var promise = new Promise((resolve, rej) => {
/******/ 			reject = rej;
/******/ 			outerResolve = resolve;
/******/ 		});
/******/ 		promise[webpackExports] = exports;
/******/ 		promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 		module.exports = promise;
/******/ 		body((deps) => {
/******/ 			currentDeps = wrapDeps(deps);
/******/ 			var fn;
/******/ 			var getResult = () => (currentDeps.map((d) => {
/******/ 				if(d[webpackError]) throw d[webpackError];
/******/ 				return d[webpackExports];
/******/ 			}))
/******/ 			var promise = new Promise((resolve) => {
/******/ 				fn = () => (resolve(getResult));
/******/ 				fn.r = 0;
/******/ 				var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 				currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 			});
/******/ 			return fn.r ? promise : getResult();
/******/ 		}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 		queue && queue.d < 0 && (queue.d = 0);
/******/ 	};
/******/ })();
/******/ 
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
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module used 'module' so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__("./src/view.js");
/******/ 

//# sourceMappingURL=view.js.map
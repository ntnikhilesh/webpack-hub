/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-loader */ \"./src/js/dom-loader.js\");\n\nvar showSecret = false;\n\n_dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secretButton\"].addEventListener('click', toggleSecretState);\nupdateSecretParagraph();\n\nfunction toggleSecretState() {\n    showSecret = !showSecret;\n    updateSecretParagraph();\n    updateSecretButton()\n}\n\nfunction updateSecretButton() {\n    if (showSecret) {\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secretButton\"].textContent = 'Hide the Secret';\n    } else {\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secretButton\"].textContent = 'Show the Secret';\n    }\n}\n\nfunction updateSecretParagraph() {\n    if (showSecret) {\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secretParagraph\"].style.display = 'block';\n    } else {\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secretParagraph\"].style.display = 'none';\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcz85MGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAge3NlY3JldEJ1dHRvbiwgc2VjcmV0UGFyYWdyYXBofSBmcm9tIFwiLi9kb20tbG9hZGVyXCJcbnZhciBzaG93U2VjcmV0ID0gZmFsc2U7XG5cbnNlY3JldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNlY3JldFN0YXRlKTtcbnVwZGF0ZVNlY3JldFBhcmFncmFwaCgpO1xuXG5mdW5jdGlvbiB0b2dnbGVTZWNyZXRTdGF0ZSgpIHtcbiAgICBzaG93U2VjcmV0ID0gIXNob3dTZWNyZXQ7XG4gICAgdXBkYXRlU2VjcmV0UGFyYWdyYXBoKCk7XG4gICAgdXBkYXRlU2VjcmV0QnV0dG9uKClcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2VjcmV0QnV0dG9uKCkge1xuICAgIGlmIChzaG93U2VjcmV0KSB7XG4gICAgICAgIHNlY3JldEJ1dHRvbi50ZXh0Q29udGVudCA9ICdIaWRlIHRoZSBTZWNyZXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNlY3JldEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTaG93IHRoZSBTZWNyZXQnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlU2VjcmV0UGFyYWdyYXBoKCkge1xuICAgIGlmIChzaG93U2VjcmV0KSB7XG4gICAgICAgIHNlY3JldFBhcmFncmFwaC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZWNyZXRQYXJhZ3JhcGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/dom-loader.js":
/*!******************************!*\
  !*** ./src/js/dom-loader.js ***!
  \******************************/
/*! exports provided: secretButton, secretParagraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secretButton\", function() { return secretButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secretParagraph\", function() { return secretParagraph; });\nvar secretButton = document.querySelector('#secret-button');\nvar secretParagraph = document.querySelector('#secret-paragraph');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZG9tLWxvYWRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9kb20tbG9hZGVyLmpzPzlhMGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBzZWNyZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VjcmV0LWJ1dHRvbicpO1xuZXhwb3J0IHZhciBzZWNyZXRQYXJhZ3JhcGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VjcmV0LXBhcmFncmFwaCcpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/dom-loader.js\n");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/js/app.js dist/bundle.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/nikhil/Desktop/nikhil-workspace/webpack-hub/src/js/app.js */"./src/js/app.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'dist/bundle.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/***/ })

/******/ });
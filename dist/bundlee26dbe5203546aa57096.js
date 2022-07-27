/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Form/Form.js":
/*!*************************************!*\
  !*** ./src/components/Form/Form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/addEventListener */ \"./src/utilities/addEventListener.js\");\n/* harmony import */ var _utilities_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/render */ \"./src/utilities/render.js\");\n/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Input/Input */ \"./src/components/Input/Input.js\");\n\n\n\n\nvar Form = function Form(container) {\n  var inputValue = \"\";\n\n  var onInputChangeHandler = function onInputChangeHandler(event) {\n    inputValue = event.target.value;\n  };\n\n  var onSubmitHandler = function onSubmitHandler(event) {\n    event.preventDefoult(); // Validate input\n\n    console.log(inputValue);\n  };\n\n  var element = (0,_utilities_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"form\", container, \"form\");\n  var input = (0,_Input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, onInputChangeHandler);\n  (0,_utilities_addEventListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, \"submit\", onSubmitHandler);\n  return {\n    element: element,\n    input: input\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n//# sourceURL=webpack://todo---project/./src/components/Form/Form.js?");

/***/ }),

/***/ "./src/components/Input/Input.js":
/*!***************************************!*\
  !*** ./src/components/Input/Input.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/addEventListener */ \"./src/utilities/addEventListener.js\");\n/* harmony import */ var _utilities_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/render */ \"./src/utilities/render.js\");\n\n\n\nvar Input = function Input(container) {\n  var eventCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n  var element = (0,_utilities_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"input\", container, \"input\");\n  (0,_utilities_addEventListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, \"input\", eventCallback);\n  return element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n//# sourceURL=webpack://todo---project/./src/components/Input/Input.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Form/Form */ \"./src/components/Form/Form.js\");\n/* harmony import */ var _components_Input_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Input/Input */ \"./src/components/Input/Input.js\");\n// import { store } from \"./todoStore/todosStore\";\n\n // import App from \"./components/app\";\n// // console.log(store);\n// const app = App();\n\nvar body = document.querySelector(\"body\");\nvar form = (0,_components_Form_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(body);\n\n//# sourceURL=webpack://todo---project/./src/index.js?");

/***/ }),

/***/ "./src/utilities/addClass.js":
/*!***********************************!*\
  !*** ./src/utilities/addClass.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar addClass = function addClass(elem, className) {\n  console.log(elem);\n  return elem.classList.add(className);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addClass);\n\n//# sourceURL=webpack://todo---project/./src/utilities/addClass.js?");

/***/ }),

/***/ "./src/utilities/addEventListener.js":
/*!*******************************************!*\
  !*** ./src/utilities/addEventListener.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar addEventListener = function addEventListener(element, eventType, eventCallback) {\n  return element.addEventListener(eventType, function (event) {\n    return eventCallback(event);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventListener);\n\n//# sourceURL=webpack://todo---project/./src/utilities/addEventListener.js?");

/***/ }),

/***/ "./src/utilities/createElem.js":
/*!*************************************!*\
  !*** ./src/utilities/createElem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar createElem = function createElem() {\n  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"h1\";\n  return document.createElement(element);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElem);\n\n//# sourceURL=webpack://todo---project/./src/utilities/createElem.js?");

/***/ }),

/***/ "./src/utilities/mountElem.js":
/*!************************************!*\
  !*** ./src/utilities/mountElem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar mountElem = function mountElem(elem, container) {\n  return container.appendChild(elem);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mountElem);\n\n//# sourceURL=webpack://todo---project/./src/utilities/mountElem.js?");

/***/ }),

/***/ "./src/utilities/render.js":
/*!*********************************!*\
  !*** ./src/utilities/render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClass */ \"./src/utilities/addClass.js\");\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElem */ \"./src/utilities/createElem.js\");\n/* harmony import */ var _mountElem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mountElem */ \"./src/utilities/mountElem.js\");\n\n\n\n\nvar render = function render() {\n  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"h1\";\n  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n  var htmlElement = (0,_createElem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element);\n  (0,_mountElem__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(htmlElement, container);\n  (0,_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(htmlElement, className);\n  return htmlElement;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://todo---project/./src/utilities/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

/***/ "./src/components/Button/Button.js":
/*!*****************************************!*\
  !*** ./src/components/Button/Button.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/render */ \"./src/utilities/render.js\");\n/* harmony import */ var _utilities_addEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/addEventListener */ \"./src/utilities/addEventListener.js\");\n\n\n\nvar Button = function Button(container, eventCallback) {\n  var element = (0,_utilities_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\", container, \"button\");\n  (0,_utilities_addEventListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, \"click\", eventCallback);\n  return element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://todo---project/./src/components/Button/Button.js?");

/***/ }),

/***/ "./src/components/Form/Form.js":
/*!*************************************!*\
  !*** ./src/components/Form/Form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/addEventListener */ \"./src/utilities/addEventListener.js\");\n/* harmony import */ var _utilities_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/render */ \"./src/utilities/render.js\");\n/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Input/Input */ \"./src/components/Input/Input.js\");\n/* harmony import */ var _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/todoStore/todosStore */ \"./src/store/todoStore/todosStore.js\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ \"./src/components/Button/Button.js\");\n\n\n\n\n\n\nvar Form = function Form(container) {\n  var titleInputValue = \"\";\n  var descriptionInputValue = \"\";\n\n  var onTitleChangeHandler = function onTitleChangeHandler(event) {\n    titleInputValue = event.target.value;\n  };\n\n  var onDescriptionChangeHandler = function onDescriptionChangeHandler(event) {\n    descriptionInputValue = event.target.value;\n  };\n\n  var onSubmitHandler = function onSubmitHandler(event) {\n    console.log(\"submited!\");\n    event.preventDefault();\n    _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_3__.todosStore.dispatch({\n      type: \"ADD_TODO\",\n      payload: {\n        id: (0,_store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_3__.addTodoId)(),\n        title: titleInputValue,\n        description: descriptionInputValue,\n        done: false\n      }\n    });\n    console.log(_store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_3__.todosStore.getState());\n    titleInput.value = \"\";\n    descriptionInput.value = \"\";\n  };\n\n  var element = (0,_utilities_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"form\", container, \"form\");\n  var titleInput = (0,_Input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, onTitleChangeHandler);\n  var descriptionInput = (0,_Input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, onDescriptionChangeHandler);\n  var submitButton = (0,_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(element, onSubmitHandler);\n  (0,_utilities_addEventListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, \"submit\", onSubmitHandler);\n  return {\n    element: element,\n    titleInput: titleInput,\n    descriptionInput: descriptionInput,\n    submitButton: submitButton\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n//# sourceURL=webpack://todo---project/./src/components/Form/Form.js?");

/***/ }),

/***/ "./src/components/Input/Input.js":
/*!***************************************!*\
  !*** ./src/components/Input/Input.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/addEventListener */ \"./src/utilities/addEventListener.js\");\n/* harmony import */ var _utilities_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/render */ \"./src/utilities/render.js\");\n\n\n\nvar Input = function Input(container, eventCallback) {\n  var element = (0,_utilities_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"input\", container, \"input\");\n  (0,_utilities_addEventListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, \"input\", eventCallback);\n  return element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n//# sourceURL=webpack://todo---project/./src/components/Input/Input.js?");

/***/ }),

/***/ "./src/components/TodoItem/TodoItem.js":
/*!*********************************************!*\
  !*** ./src/components/TodoItem/TodoItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/render */ \"./src/utilities/render.js\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ \"./src/components/Button/Button.js\");\n/* harmony import */ var _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/todoStore/todosStore */ \"./src/store/todoStore/todosStore.js\");\n\n\n\n\nvar TodoItem = function TodoItem(container, todoTitle, todoDescription, todoId) {\n  var id = todoId;\n  var element = (0,_utilities_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", container, \"todoItem\");\n  element.setAttribute(\"id\", id);\n\n  var onDeleteHandler = function onDeleteHandler() {\n    _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_2__.todosStore.dispatch({\n      type: \"REMOVE_TODO\",\n      payload: {\n        id: id\n      }\n    });\n  };\n\n  var title = (0,_utilities_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\", element, \"title\");\n  title.innerHTML = todoTitle;\n  var description = (0,_utilities_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", element, \"description\");\n  description.innerHTML = todoDescription;\n  var deleteButton = (0,_Button_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, onDeleteHandler);\n  return {\n    id: id,\n    element: element,\n    title: title,\n    description: description\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoItem);\n\n//# sourceURL=webpack://todo---project/./src/components/TodoItem/TodoItem.js?");

/***/ }),

/***/ "./src/components/TodosContainer/TodosContainer.js":
/*!*********************************************************!*\
  !*** ./src/components/TodosContainer/TodosContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/render */ \"./src/utilities/render.js\");\n/* harmony import */ var _Todos_Todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Todos/Todos */ \"./src/components/Todos/Todos.js\");\n/* harmony import */ var _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/todoStore/todosStore */ \"./src/store/todoStore/todosStore.js\");\n\n\n\n\nvar TodosContainer = function TodosContainer(container) {\n  var element = (0,_utilities_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", container, \"todosContainer\");\n  var undoneTodosList = _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_2__.todosStore.getState().filter(function (todo) {\n    return todo.done === false;\n  });\n  var doneTodosList = _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_2__.todosStore.getState().filter(function (todo) {\n    return todo.done === false;\n  });\n  var undoneTodos = (0,_Todos_Todos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, undoneTodosList, \"undoneTodos\");\n  var doneTodos = (0,_Todos_Todos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, doneTodosList, \"doneTodos\");\n  return {\n    element: element,\n    undoneTodos: undoneTodos,\n    doneTodos: doneTodos\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodosContainer);\n\n//# sourceURL=webpack://todo---project/./src/components/TodosContainer/TodosContainer.js?");

/***/ }),

/***/ "./src/components/Todos/Todos.js":
/*!***************************************!*\
  !*** ./src/components/Todos/Todos.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/render */ \"./src/utilities/render.js\");\n/* harmony import */ var _utilities_renderTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/renderTodos */ \"./src/utilities/renderTodos.js\");\n\n\n\nvar Todos = function Todos(container, listOfTodos, className) {\n  var element = (0,_utilities_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", container, className);\n  var todos = (0,_utilities_renderTodos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, listOfTodos);\n  return {\n    element: element,\n    todos: todos\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todos);\n\n//# sourceURL=webpack://todo---project/./src/components/Todos/Todos.js?");

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/todoStore/todosStore */ \"./src/store/todoStore/todosStore.js\");\n/* harmony import */ var _utilities_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/render */ \"./src/utilities/render.js\");\n/* harmony import */ var _Form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form/Form */ \"./src/components/Form/Form.js\");\n/* harmony import */ var _TodosContainer_TodosContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodosContainer/TodosContainer */ \"./src/components/TodosContainer/TodosContainer.js\");\n\n\n\n // main commponent\n\nvar App = function App(container) {\n  var element = (0,_utilities_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", container, \"appContainer\");\n  var form = (0,_Form_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element);\n  _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_0__.todosStore.subscribe((0,_TodosContainer_TodosContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(element));\n  (0,_TodosContainer_TodosContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(element);\n  return element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://todo---project/./src/components/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app */ \"./src/components/app.js\");\n // // console.log(store);\n// const app = App();\n\nvar body = document.querySelector(\"body\");\nvar app = (0,_components_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(body);\n\n//# sourceURL=webpack://todo---project/./src/index.js?");

/***/ }),

/***/ "./src/store/globalStateFunctions/createStore.js":
/*!*******************************************************!*\
  !*** ./src/store/globalStateFunctions/createStore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// createStore function\nvar createStore = function createStore(reducer) {\n  var state;\n  var listeners = [];\n\n  var getState = function getState() {\n    return state;\n  };\n\n  var dispatch = function dispatch(action) {\n    state = reducer(state, action);\n    listeners.forEach(function (listener) {\n      return listener();\n    });\n  };\n\n  var subscribe = function subscribe(listener) {\n    listeners.push(listener);\n  };\n\n  var unsubscribe = function unsubscribe(listener) {\n    listeners.filter(function (arrayListener) {\n      return arrayListener !== listener;\n    });\n  };\n\n  return {\n    getState: getState,\n    dispatch: dispatch,\n    subscribe: subscribe,\n    unsubscribe: unsubscribe\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStore);\n\n//# sourceURL=webpack://todo---project/./src/store/globalStateFunctions/createStore.js?");

/***/ }),

/***/ "./src/store/todoStore/todosReducers/todoReducer.js":
/*!**********************************************************!*\
  !*** ./src/store/todoStore/todosReducers/todoReducer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar todoReducer = function todoReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"ADD_TODO\":\n      return {\n        id: action.payload.id,\n        title: action.payload.title,\n        description: action.payload.description,\n        done: false\n      };\n\n    case \"REMOVE_TODO\":\n      return todo.id !== action.payload.id;\n\n    case \"TOGGLE_TODO\":\n      if (state.id !== action.payload.id) {\n        return state;\n      }\n\n      return _objectSpread(_objectSpread({}, state), {}, {\n        done: !state.done\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoReducer);\n\n//# sourceURL=webpack://todo---project/./src/store/todoStore/todosReducers/todoReducer.js?");

/***/ }),

/***/ "./src/store/todoStore/todosReducers/todosReducer.js":
/*!***********************************************************!*\
  !*** ./src/store/todoStore/todosReducers/todosReducer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoReducer */ \"./src/store/todoStore/todosReducers/todoReducer.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar todosReducer = function todosReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"ADD_TODO\":\n      return [].concat(_toConsumableArray(state), [(0,_todoReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(undefined, action)]);\n\n    case \"REMOVE_TODO\":\n      return state.filter(function (todo) {\n        return (0,_todoReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo, action);\n      });\n\n    case \"TOGGLE__TODO\":\n      return state.map(function (todo) {\n        return (0,_todoReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo, action);\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todosReducer);\n\n//# sourceURL=webpack://todo---project/./src/store/todoStore/todosReducers/todosReducer.js?");

/***/ }),

/***/ "./src/store/todoStore/todosStore.js":
/*!*******************************************!*\
  !*** ./src/store/todoStore/todosStore.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoId\": () => (/* binding */ addTodoId),\n/* harmony export */   \"todosStore\": () => (/* binding */ todosStore)\n/* harmony export */ });\n/* harmony import */ var _globalStateFunctions_createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalStateFunctions/createStore */ \"./src/store/globalStateFunctions/createStore.js\");\n/* harmony import */ var _todosReducers_todosReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todosReducers/todosReducer */ \"./src/store/todoStore/todosReducers/todosReducer.js\");\n\n // For adding todoId :/\n// To reconsider - shouldnt making access points for state id\n\nvar todoId = 0;\nvar addTodoId = function addTodoId() {\n  todoId++;\n  return todoId;\n};\nvar todosStore = (0,_globalStateFunctions_createStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_todosReducers_todosReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://todo---project/./src/store/todoStore/todosStore.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar addEventListener = function addEventListener(element, eventType, eventCallback) {\n  element.addEventListener(eventType, function (event) {\n    return eventCallback(event);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventListener);\n\n//# sourceURL=webpack://todo---project/./src/utilities/addEventListener.js?");

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

/***/ }),

/***/ "./src/utilities/renderTodos.js":
/*!**************************************!*\
  !*** ./src/utilities/renderTodos.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_TodoItem_TodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TodoItem/TodoItem */ \"./src/components/TodoItem/TodoItem.js\");\n\n\nvar renderTodos = function renderTodos(container, listOfTodos) {\n  return listOfTodos.map(function (todo) {\n    return (0,_components_TodoItem_TodoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(container, todo.title, todo.description, todo.id);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTodos);\n\n//# sourceURL=webpack://todo---project/./src/utilities/renderTodos.js?");

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
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/domManipulationsFunctions.js/render */ \"./src/utilities/domManipulationsFunctions.js/render.js\");\n/* harmony import */ var _utilities_domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/domManipulationsFunctions.js/addEventListener */ \"./src/utilities/domManipulationsFunctions.js/addEventListener.js\");\n\n\n\nvar Button = function Button(container, eventCallback) {\n  var element = (0,_utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\", container, \"button\");\n  (0,_utilities_domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, \"click\", eventCallback);\n  return element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://todo---project/./src/components/Button/Button.js?");

/***/ }),

/***/ "./src/components/Form/Form.js":
/*!*************************************!*\
  !*** ./src/components/Form/Form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/domManipulationsFunctions.js/addEventListener */ \"./src/utilities/domManipulationsFunctions.js/addEventListener.js\");\n/* harmony import */ var _utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/domManipulationsFunctions.js/render */ \"./src/utilities/domManipulationsFunctions.js/render.js\");\n/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Input/Input */ \"./src/components/Input/Input.js\");\n/* harmony import */ var _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/todoStore/todosStore */ \"./src/store/todoStore/todosStore.js\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ \"./src/components/Button/Button.js\");\n\n\n\n\n\n\nvar Form = function Form(container) {\n  var titleInputValue = \"\";\n  var descriptionInputValue = \"\";\n\n  var onTitleChangeHandler = function onTitleChangeHandler(event) {\n    titleInputValue = event.target.value;\n  };\n\n  var onDescriptionChangeHandler = function onDescriptionChangeHandler(event) {\n    descriptionInputValue = event.target.value;\n  };\n\n  var onSubmitHandler = function onSubmitHandler(event) {\n    event.preventDefault();\n    _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_3__.todosStore.dispatch({\n      type: \"todosReducer/ADD_TODO\",\n      payload: {\n        id: (0,_store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_3__.addTodoId)(),\n        title: titleInputValue,\n        description: descriptionInputValue,\n        done: false\n      }\n    });\n    titleInput.value = \"\";\n    descriptionInput.value = \"\";\n  };\n\n  var element = (0,_utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"form\", container, \"form\");\n  var titleInput = (0,_Input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, onTitleChangeHandler);\n  var descriptionInput = (0,_Input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, onDescriptionChangeHandler);\n  var submitButton = (0,_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(element, onSubmitHandler);\n  (0,_utilities_domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, \"submit\", onSubmitHandler);\n  return {\n    element: element,\n    titleInput: titleInput,\n    descriptionInput: descriptionInput,\n    submitButton: submitButton\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n//# sourceURL=webpack://todo---project/./src/components/Form/Form.js?");

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/domManipulationsFunctions.js/render */ \"./src/utilities/domManipulationsFunctions.js/render.js\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ \"./src/components/Button/Button.js\");\n/* harmony import */ var _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/todoStore/todosStore */ \"./src/store/todoStore/todosStore.js\");\n/* harmony import */ var _utilities_domManipulationsFunctions_js_addClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/domManipulationsFunctions.js/addClass */ \"./src/utilities/domManipulationsFunctions.js/addClass.js\");\n/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.css */ \"./src/components/Header/Header.css\");\n\n\n\n\n\n\nvar Header = function Header(container, titleText) {\n  var element = (0,_utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"header\", container, \"header\");\n\n  var changeModeHandler = function changeModeHandler() {\n    _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_2__.todosStore.dispatch({\n      type: \"themeReducer/TOGGLE_MODE\"\n    });\n  };\n\n  var headerTitle = (0,_utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\", element, \"header__title\");\n  headerTitle.innerHTML = titleText;\n  var modeButton = (0,_Button_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, changeModeHandler);\n  (0,_utilities_domManipulationsFunctions_js_addClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(modeButton, \"header__mode-button\");\n  return {\n    element: element,\n    headerTitle: headerTitle,\n    modeButton: modeButton\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://todo---project/./src/components/Header/Header.js?");

/***/ }),

/***/ "./src/components/Input/Input.js":
/*!***************************************!*\
  !*** ./src/components/Input/Input.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/domManipulationsFunctions.js/addEventListener */ \"./src/utilities/domManipulationsFunctions.js/addEventListener.js\");\n/* harmony import */ var _utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/domManipulationsFunctions.js/render */ \"./src/utilities/domManipulationsFunctions.js/render.js\");\n\n\n\nvar Input = function Input(container, eventCallback) {\n  var element = (0,_utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"input\", container, \"input\");\n  (0,_utilities_domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, \"input\", eventCallback);\n  return element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n//# sourceURL=webpack://todo---project/./src/components/Input/Input.js?");

/***/ }),

/***/ "./src/components/TodoItem/TodoItem.js":
/*!*********************************************!*\
  !*** ./src/components/TodoItem/TodoItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/domManipulationsFunctions.js/render */ \"./src/utilities/domManipulationsFunctions.js/render.js\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ \"./src/components/Button/Button.js\");\n/* harmony import */ var _TodoItem_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem.css */ \"./src/components/TodoItem/TodoItem.css\");\n/* harmony import */ var _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/todoStore/todosStore */ \"./src/store/todoStore/todosStore.js\");\n/* harmony import */ var _utilities_dragAndDropListeners_addDragElemListeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/dragAndDropListeners/addDragElemListeners */ \"./src/utilities/dragAndDropListeners/addDragElemListeners.js\");\n\n\n\n\n\n\nvar TodoItem = function TodoItem(container, todoTitle, todoDescription, todoId) {\n  var id = todoId;\n  var element = (0,_utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", container, \"todoItem\");\n  element.setAttribute(\"id\", id);\n  element.setAttribute(\"draggable\", true);\n\n  var onDeleteHandler = function onDeleteHandler() {\n    _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_3__.todosStore.dispatch({\n      type: \"todosReducer/REMOVE_TODO\",\n      payload: {\n        id: id\n      }\n    });\n  };\n\n  (0,_utilities_dragAndDropListeners_addDragElemListeners__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(element);\n  var title = (0,_utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\", element, \"title\");\n  title.innerHTML = todoTitle;\n  var description = (0,_utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", element, \"description\");\n  description.innerHTML = todoDescription;\n  var deleteButton = (0,_Button_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, onDeleteHandler);\n  return {\n    id: id,\n    element: element,\n    title: title,\n    description: description\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoItem);\n\n//# sourceURL=webpack://todo---project/./src/components/TodoItem/TodoItem.js?");

/***/ }),

/***/ "./src/components/TodosContainer/TodosContainer.js":
/*!*********************************************************!*\
  !*** ./src/components/TodosContainer/TodosContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/domManipulationsFunctions.js/render */ \"./src/utilities/domManipulationsFunctions.js/render.js\");\n/* harmony import */ var _Todos_Todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Todos/Todos */ \"./src/components/Todos/Todos.js\");\n/* harmony import */ var _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/todoStore/todosStore */ \"./src/store/todoStore/todosStore.js\");\n/* harmony import */ var _TodosContainer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodosContainer.css */ \"./src/components/TodosContainer/TodosContainer.css\");\n\n\n\n\n\nvar TodosContainer = function TodosContainer(container) {\n  var element = (0,_utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", container, \"todosContainer\");\n  var undoneTodosList = _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_2__.todosStore.getState().todos.filter(function (todo) {\n    return todo.done === false;\n  });\n  var doneTodosList = _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_2__.todosStore.getState().todos.filter(function (todo) {\n    return todo.done === true;\n  });\n  var undoneTodos = (0,_Todos_Todos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, undoneTodosList, \"Undone todos\", \"undoneTodos\");\n  var doneTodos = (0,_Todos_Todos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, doneTodosList, \"Done todos\", \"doneTodos\");\n  return {\n    element: element,\n    undoneTodos: undoneTodos,\n    doneTodos: doneTodos\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodosContainer);\n\n//# sourceURL=webpack://todo---project/./src/components/TodosContainer/TodosContainer.js?");

/***/ }),

/***/ "./src/components/Todos/Todos.js":
/*!***************************************!*\
  !*** ./src/components/Todos/Todos.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/domManipulationsFunctions.js/render */ \"./src/utilities/domManipulationsFunctions.js/render.js\");\n/* harmony import */ var _utilities_dragAndDropListeners_addDragTargetListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/dragAndDropListeners/addDragTargetListeners */ \"./src/utilities/dragAndDropListeners/addDragTargetListeners.js\");\n/* harmony import */ var _utilities_domManipulationsFunctions_js_renderTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/domManipulationsFunctions.js/renderTodos */ \"./src/utilities/domManipulationsFunctions.js/renderTodos.js\");\n/* harmony import */ var _Todos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todos.css */ \"./src/components/Todos/Todos.css\");\n\n\n\n\n\nvar Todos = function Todos(container, listOfTodos, title, className) {\n  var element = (0,_utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", container, className);\n  element.setAttribute(\"id\", className);\n  var todosTitle = (0,_utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\", element, \"title\");\n  todosTitle.innerHTML = title;\n  var todos = (0,_utilities_domManipulationsFunctions_js_renderTodos__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, listOfTodos);\n  (0,_utilities_dragAndDropListeners_addDragTargetListeners__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element);\n  return {\n    element: element,\n    todos: todos\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todos);\n\n//# sourceURL=webpack://todo---project/./src/components/Todos/Todos.js?");

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/todoStore/todosStore */ \"./src/store/todoStore/todosStore.js\");\n/* harmony import */ var _utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/domManipulationsFunctions.js/render */ \"./src/utilities/domManipulationsFunctions.js/render.js\");\n/* harmony import */ var _utilities_domManipulationsFunctions_js_unmountElem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/domManipulationsFunctions.js/unmountElem */ \"./src/utilities/domManipulationsFunctions.js/unmountElem.js\");\n/* harmony import */ var _utilities_dragAndDropListeners_addCopyOptionListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/dragAndDropListeners/addCopyOptionListener */ \"./src/utilities/dragAndDropListeners/addCopyOptionListener.js\");\n/* harmony import */ var _Form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form/Form */ \"./src/components/Form/Form.js\");\n/* harmony import */ var _TodosContainer_TodosContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TodosContainer/TodosContainer */ \"./src/components/TodosContainer/TodosContainer.js\");\n/* harmony import */ var _utilities_domManipulationsFunctions_js_addClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/domManipulationsFunctions.js/addClass */ \"./src/utilities/domManipulationsFunctions.js/addClass.js\");\n/* harmony import */ var _utilities_domManipulationsFunctions_js_removeClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/domManipulationsFunctions.js/removeClass */ \"./src/utilities/domManipulationsFunctions.js/removeClass.js\");\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header/Header */ \"./src/components/Header/Header.js\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.css */ \"./src/components/app.css\");\n\n\n\n\n\n\n\n\n\n\n\nvar App = function App(container) {\n  var element = (0,_utilities_domManipulationsFunctions_js_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", container, \"app\");\n  var header = (0,_Header_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(element, \"Your tasks for today!\");\n  var form = (0,_Form_Form__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(element);\n  var todos = (0,_TodosContainer_TodosContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(element);\n\n  var updateTodos = function updateTodos() {\n    (0,_utilities_domManipulationsFunctions_js_unmountElem__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todos.element);\n    todos = (0,_TodosContainer_TodosContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(element);\n  };\n\n  var updateStyle = function updateStyle() {\n    var mode = _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_0__.todosStore.getState().mode;\n\n    if (mode === \"lightmode\") {\n      (0,_utilities_domManipulationsFunctions_js_removeClass__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(element, \"darkmode\");\n    }\n\n    if (mode === \"darkmode\") {\n      (0,_utilities_domManipulationsFunctions_js_removeClass__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(element, \"lightmode\");\n    }\n\n    (0,_utilities_domManipulationsFunctions_js_addClass__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(element, mode);\n  };\n\n  updateStyle();\n  (0,_utilities_dragAndDropListeners_addCopyOptionListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_0__.todosStore.subscribe(updateTodos);\n  _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_0__.todosStore.subscribe(updateStyle);\n  return element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://todo---project/./src/components/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-styles.css */ \"./src/global-styles.css\");\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app */ \"./src/components/app.js\");\n\n\nvar body = document.querySelector(\"body\");\nvar app = (0,_components_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(body);\n\n//# sourceURL=webpack://todo---project/./src/index.js?");

/***/ }),

/***/ "./src/store/globalStateFunctions/combineReducers.js":
/*!***********************************************************!*\
  !*** ./src/store/globalStateFunctions/combineReducers.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar combineReducers = function combineReducers() {\n  for (var _len = arguments.length, reducers = new Array(_len), _key = 0; _key < _len; _key++) {\n    reducers[_key] = arguments[_key];\n  }\n\n  return function (state, action) {\n    var reducerName = action.type.split(\"/\")[0];\n    action.type = action.type.split(\"/\")[1];\n    reducers.forEach(function (reducer) {\n      if (reducer.prototype.constructor.name.includes(reducerName)) {\n        state = reducer(state, action);\n      }\n    });\n    return state;\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combineReducers);\n\n//# sourceURL=webpack://todo---project/./src/store/globalStateFunctions/combineReducers.js?");

/***/ }),

/***/ "./src/store/globalStateFunctions/createStore.js":
/*!*******************************************************!*\
  !*** ./src/store/globalStateFunctions/createStore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// createStore function\nvar createStore = function createStore(reducer, initialState) {\n  var state = initialState;\n  var listeners = [];\n\n  var getState = function getState() {\n    return state;\n  };\n\n  var dispatch = function dispatch(action) {\n    state = reducer(state, action);\n    listeners.forEach(function (listener) {\n      return listener();\n    });\n  };\n\n  var subscribe = function subscribe(listener) {\n    listeners.push(listener);\n  };\n\n  var unsubscribe = function unsubscribe(listener) {\n    listeners.filter(function (arrayListener) {\n      return arrayListener !== listener;\n    });\n  };\n\n  return {\n    getState: getState,\n    dispatch: dispatch,\n    subscribe: subscribe,\n    unsubscribe: unsubscribe\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStore);\n\n//# sourceURL=webpack://todo---project/./src/store/globalStateFunctions/createStore.js?");

/***/ }),

/***/ "./src/store/todoStore/initialState.js":
/*!*********************************************!*\
  !*** ./src/store/todoStore/initialState.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar initialState = {\n  todos: [],\n  mode: \"darkmode\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialState);\n\n//# sourceURL=webpack://todo---project/./src/store/todoStore/initialState.js?");

/***/ }),

/***/ "./src/store/todoStore/themeReducers/themeReducer.js":
/*!***********************************************************!*\
  !*** ./src/store/todoStore/themeReducers/themeReducer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar themeSwitchHandler = function themeSwitchHandler(state) {\n  console.log(state.mode);\n\n  if (state.mode === \"lightmode\") {\n    return \"darkmode\";\n  }\n\n  if (state.mode === \"darkmode\") {\n    return \"lightmode\";\n  }\n};\n\nvar themeReducer = function themeReducer(state, action) {\n  switch (action.type) {\n    case \"TOGGLE_MODE\":\n      return {\n        todos: _toConsumableArray(state.todos),\n        mode: themeSwitchHandler(state)\n      };\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeReducer);\n\n//# sourceURL=webpack://todo---project/./src/store/todoStore/themeReducers/themeReducer.js?");

/***/ }),

/***/ "./src/store/todoStore/todosReducers/todoReducer.js":
/*!**********************************************************!*\
  !*** ./src/store/todoStore/todosReducers/todoReducer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar todoReducer = function todoReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"ADD_TODO\":\n      return {\n        id: action.payload.id,\n        title: action.payload.title,\n        description: action.payload.description,\n        done: action.payload.done\n      };\n\n    case \"REMOVE_TODO\":\n      return state.id !== action.payload.id;\n\n    case \"TOGGLE_TODO\":\n      if (state.id !== action.payload.id) {\n        return state;\n      }\n\n      return _objectSpread(_objectSpread({}, state), {}, {\n        done: !state.done\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoReducer);\n\n//# sourceURL=webpack://todo---project/./src/store/todoStore/todosReducers/todoReducer.js?");

/***/ }),

/***/ "./src/store/todoStore/todosReducers/todosReducer.js":
/*!***********************************************************!*\
  !*** ./src/store/todoStore/todosReducers/todosReducer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoReducer */ \"./src/store/todoStore/todosReducers/todoReducer.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar todosReducer = function todosReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"ADD_TODO\":\n      return {\n        todos: [].concat(_toConsumableArray(state.todos), [(0,_todoReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(undefined, action)]),\n        mode: state.mode\n      };\n\n    case \"REMOVE_TODO\":\n      return {\n        todos: state.todos.filter(function (todo) {\n          return (0,_todoReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo, action);\n        }),\n        mode: state.mode\n      };\n\n    case \"TOGGLE_TODO\":\n      return {\n        todos: state.todos.map(function (todo) {\n          return (0,_todoReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo, action);\n        }),\n        mode: state.mode\n      };\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todosReducer);\n\n//# sourceURL=webpack://todo---project/./src/store/todoStore/todosReducers/todosReducer.js?");

/***/ }),

/***/ "./src/store/todoStore/todosStore.js":
/*!*******************************************!*\
  !*** ./src/store/todoStore/todosStore.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoId\": () => (/* binding */ addTodoId),\n/* harmony export */   \"todosStore\": () => (/* binding */ todosStore)\n/* harmony export */ });\n/* harmony import */ var _globalStateFunctions_createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalStateFunctions/createStore */ \"./src/store/globalStateFunctions/createStore.js\");\n/* harmony import */ var _todosReducers_todosReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todosReducers/todosReducer */ \"./src/store/todoStore/todosReducers/todosReducer.js\");\n/* harmony import */ var _themeReducers_themeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themeReducers/themeReducer */ \"./src/store/todoStore/themeReducers/themeReducer.js\");\n/* harmony import */ var _globalStateFunctions_combineReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalStateFunctions/combineReducers */ \"./src/store/globalStateFunctions/combineReducers.js\");\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initialState */ \"./src/store/todoStore/initialState.js\");\n\n\n\n\n // For adding todoId :/\n// To reconsider - shouldnt making access points for state id\n\nvar todoId = 0;\nvar addTodoId = function addTodoId() {\n  todoId++;\n  return todoId.toString();\n};\nvar combinedReducers = (0,_globalStateFunctions_combineReducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_todosReducers_todosReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _themeReducers_themeReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar todosStore = (0,_globalStateFunctions_createStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(combinedReducers, _initialState__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n//# sourceURL=webpack://todo---project/./src/store/todoStore/todosStore.js?");

/***/ }),

/***/ "./src/utilities/domManipulationsFunctions.js/addClass.js":
/*!****************************************************************!*\
  !*** ./src/utilities/domManipulationsFunctions.js/addClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar addClass = function addClass(elem, className) {\n  return elem.classList.add(className);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addClass);\n\n//# sourceURL=webpack://todo---project/./src/utilities/domManipulationsFunctions.js/addClass.js?");

/***/ }),

/***/ "./src/utilities/domManipulationsFunctions.js/addEventListener.js":
/*!************************************************************************!*\
  !*** ./src/utilities/domManipulationsFunctions.js/addEventListener.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar addEventListener = function addEventListener(element, eventType, eventCallback) {\n  element.addEventListener(eventType, function (event) {\n    return eventCallback(event);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventListener);\n\n//# sourceURL=webpack://todo---project/./src/utilities/domManipulationsFunctions.js/addEventListener.js?");

/***/ }),

/***/ "./src/utilities/domManipulationsFunctions.js/createElem.js":
/*!******************************************************************!*\
  !*** ./src/utilities/domManipulationsFunctions.js/createElem.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar createElem = function createElem() {\n  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"h1\";\n  return document.createElement(element);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElem);\n\n//# sourceURL=webpack://todo---project/./src/utilities/domManipulationsFunctions.js/createElem.js?");

/***/ }),

/***/ "./src/utilities/domManipulationsFunctions.js/mountElem.js":
/*!*****************************************************************!*\
  !*** ./src/utilities/domManipulationsFunctions.js/mountElem.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar mountElem = function mountElem(elem, container) {\n  return container.appendChild(elem);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mountElem);\n\n//# sourceURL=webpack://todo---project/./src/utilities/domManipulationsFunctions.js/mountElem.js?");

/***/ }),

/***/ "./src/utilities/domManipulationsFunctions.js/removeClass.js":
/*!*******************************************************************!*\
  !*** ./src/utilities/domManipulationsFunctions.js/removeClass.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar removeClass = function removeClass(element, className) {\n  element.classList.remove(className);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeClass);\n\n//# sourceURL=webpack://todo---project/./src/utilities/domManipulationsFunctions.js/removeClass.js?");

/***/ }),

/***/ "./src/utilities/domManipulationsFunctions.js/render.js":
/*!**************************************************************!*\
  !*** ./src/utilities/domManipulationsFunctions.js/render.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClass */ \"./src/utilities/domManipulationsFunctions.js/addClass.js\");\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElem */ \"./src/utilities/domManipulationsFunctions.js/createElem.js\");\n/* harmony import */ var _mountElem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mountElem */ \"./src/utilities/domManipulationsFunctions.js/mountElem.js\");\n\n\n\n\nvar render = function render() {\n  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"h1\";\n  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n  var htmlElement = (0,_createElem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element);\n  (0,_mountElem__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(htmlElement, container);\n  (0,_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(htmlElement, className);\n  return htmlElement;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://todo---project/./src/utilities/domManipulationsFunctions.js/render.js?");

/***/ }),

/***/ "./src/utilities/domManipulationsFunctions.js/renderTodos.js":
/*!*******************************************************************!*\
  !*** ./src/utilities/domManipulationsFunctions.js/renderTodos.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_TodoItem_TodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/TodoItem/TodoItem */ \"./src/components/TodoItem/TodoItem.js\");\n\n\nvar renderTodos = function renderTodos(container, listOfTodos) {\n  return listOfTodos.map(function (todo) {\n    return (0,_components_TodoItem_TodoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(container, todo.title, todo.description, todo.id);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTodos);\n\n//# sourceURL=webpack://todo---project/./src/utilities/domManipulationsFunctions.js/renderTodos.js?");

/***/ }),

/***/ "./src/utilities/domManipulationsFunctions.js/unmountElem.js":
/*!*******************************************************************!*\
  !*** ./src/utilities/domManipulationsFunctions.js/unmountElem.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar unmountElem = function unmountElem(element) {\n  if (element) {\n    console.log(element);\n    element.remove();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unmountElem);\n\n//# sourceURL=webpack://todo---project/./src/utilities/domManipulationsFunctions.js/unmountElem.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropFunctions/copyKeyDetect.js":
/*!*************************************************************!*\
  !*** ./src/utilities/dragAndDropFunctions/copyKeyDetect.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"copyKeyPressed\": () => (/* binding */ copyKeyPressed),\n/* harmony export */   \"copyKeyPressedHandler\": () => (/* binding */ copyKeyPressedHandler),\n/* harmony export */   \"copyKeyUnpressedHandler\": () => (/* binding */ copyKeyUnpressedHandler)\n/* harmony export */ });\nvar copyKeyPressed = false;\nvar copyKeyPressedHandler = function copyKeyPressedHandler(event) {\n  if (event.key === \"c\") {\n    copyKeyPressed = true;\n  }\n};\nvar copyKeyUnpressedHandler = function copyKeyUnpressedHandler(event) {\n  if (event.key === \"c\") {\n    copyKeyPressed = false;\n  }\n};\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropFunctions/copyKeyDetect.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropFunctions/dragdrop.js":
/*!********************************************************!*\
  !*** ./src/utilities/dragAndDropFunctions/dragdrop.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/todoStore/todosStore */ \"./src/store/todoStore/todosStore.js\");\n/* harmony import */ var _dragenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragenter */ \"./src/utilities/dragAndDropFunctions/dragenter.js\");\n/* harmony import */ var _copyKeyDetect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./copyKeyDetect */ \"./src/utilities/dragAndDropFunctions/copyKeyDetect.js\");\n\n\n\n\n\nvar dragdrop = function dragdrop(event) {\n  event.stopPropagation();\n  var id = event.dataTransfer.getData(\"text/plain\");\n  var todoToDrop = _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_0__.todosStore.getState().todos.find(function (todo) {\n    return todo.id === id;\n  });\n\n  if (todoToDrop.done === false && _dragenter__WEBPACK_IMPORTED_MODULE_1__.containerId === \"doneTodos\" || todoToDrop.done === true && _dragenter__WEBPACK_IMPORTED_MODULE_1__.containerId === \"undoneTodos\") {\n    if (_copyKeyDetect__WEBPACK_IMPORTED_MODULE_2__.copyKeyPressed) {\n      _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_0__.todosStore.dispatch({\n        type: \"todosReducer/ADD_TODO\",\n        payload: {\n          id: (0,_store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_0__.addTodoId)(),\n          title: todoToDrop.title,\n          description: todoToDrop.description,\n          done: !todoToDrop.done\n        }\n      });\n      return;\n    }\n\n    _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_0__.todosStore.dispatch({\n      type: \"todosReducer/TOGGLE_TODO\",\n      payload: {\n        id: id\n      }\n    });\n  } else {\n    if (_copyKeyDetect__WEBPACK_IMPORTED_MODULE_2__.copyKeyPressed) {\n      _store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_0__.todosStore.dispatch({\n        type: \"todosReducer/ADD_TODO\",\n        payload: {\n          id: (0,_store_todoStore_todosStore__WEBPACK_IMPORTED_MODULE_0__.addTodoId)(),\n          title: todoToDrop.title,\n          description: todoToDrop.description,\n          done: todoToDrop.done\n        }\n      });\n      return;\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragdrop);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropFunctions/dragdrop.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropFunctions/dragend.js":
/*!*******************************************************!*\
  !*** ./src/utilities/dragAndDropFunctions/dragend.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar dragend = function dragend(event) {\n  event.target.style.opacity = \"1\";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragend);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropFunctions/dragend.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropFunctions/dragenter.js":
/*!*********************************************************!*\
  !*** ./src/utilities/dragAndDropFunctions/dragenter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"containerId\": () => (/* binding */ containerId),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar containerId = \"\";\n\nvar dragenter = function dragenter(event) {\n  event.target.classList.add(\"over\");\n  containerId = event.target.id;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragenter);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropFunctions/dragenter.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropFunctions/dragleave.js":
/*!*********************************************************!*\
  !*** ./src/utilities/dragAndDropFunctions/dragleave.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar dragleave = function dragleave(event) {\n  event.target.classList.remove(\"over\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragleave);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropFunctions/dragleave.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropFunctions/dragover.js":
/*!********************************************************!*\
  !*** ./src/utilities/dragAndDropFunctions/dragover.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar dragover = function dragover(event) {\n  event.preventDefault();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragover);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropFunctions/dragover.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropFunctions/dragstart.js":
/*!*********************************************************!*\
  !*** ./src/utilities/dragAndDropFunctions/dragstart.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar dragstart = function dragstart(event) {\n  event.target.style.opacity = \"0.4\";\n  console.log(event.target.id);\n  event.dataTransfer.setData(\"text/plain\", event.target.id);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragstart);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropFunctions/dragstart.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropListeners/addCopyOptionListener.js":
/*!*********************************************************************!*\
  !*** ./src/utilities/dragAndDropListeners/addCopyOptionListener.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulationsFunctions.js/addEventListener */ \"./src/utilities/domManipulationsFunctions.js/addEventListener.js\");\n/* harmony import */ var _dragAndDropFunctions_copyKeyDetect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dragAndDropFunctions/copyKeyDetect */ \"./src/utilities/dragAndDropFunctions/copyKeyDetect.js\");\n\n\n\nvar addCopyOptionListener = function addCopyOptionListener() {\n  (0,_domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(window, \"keydown\", _dragAndDropFunctions_copyKeyDetect__WEBPACK_IMPORTED_MODULE_1__.copyKeyPressedHandler);\n  (0,_domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(window, \"keyup\", _dragAndDropFunctions_copyKeyDetect__WEBPACK_IMPORTED_MODULE_1__.copyKeyUnpressedHandler);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCopyOptionListener);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropListeners/addCopyOptionListener.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropListeners/addDragElemListeners.js":
/*!********************************************************************!*\
  !*** ./src/utilities/dragAndDropListeners/addDragElemListeners.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _draggableElementListeners_addDragStartListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draggableElementListeners/addDragStartListener */ \"./src/utilities/dragAndDropListeners/draggableElementListeners/addDragStartListener.js\");\n/* harmony import */ var _draggableElementListeners_addDragEndListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draggableElementListeners/addDragEndListener */ \"./src/utilities/dragAndDropListeners/draggableElementListeners/addDragEndListener.js\");\n\n\n\nvar addDragElemListeners = function addDragElemListeners(elem) {\n  (0,_draggableElementListeners_addDragStartListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(elem);\n  (0,_draggableElementListeners_addDragEndListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elem);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDragElemListeners);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropListeners/addDragElemListeners.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropListeners/addDragTargetListeners.js":
/*!**********************************************************************!*\
  !*** ./src/utilities/dragAndDropListeners/addDragTargetListeners.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _targetAreaListeners_addDragEnterListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./targetAreaListeners/addDragEnterListener */ \"./src/utilities/dragAndDropListeners/targetAreaListeners/addDragEnterListener.js\");\n/* harmony import */ var _targetAreaListeners_addDragOverListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./targetAreaListeners/addDragOverListener */ \"./src/utilities/dragAndDropListeners/targetAreaListeners/addDragOverListener.js\");\n/* harmony import */ var _targetAreaListeners_addDragDropListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./targetAreaListeners/addDragDropListener */ \"./src/utilities/dragAndDropListeners/targetAreaListeners/addDragDropListener.js\");\n/* harmony import */ var _targetAreaListeners_addDragLeaveListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./targetAreaListeners/addDragLeaveListener */ \"./src/utilities/dragAndDropListeners/targetAreaListeners/addDragLeaveListener.js\");\n\n\n\n\n\nvar addDragTargetListeners = function addDragTargetListeners(target) {\n  (0,_targetAreaListeners_addDragEnterListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target);\n  (0,_targetAreaListeners_addDragOverListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target);\n  (0,_targetAreaListeners_addDragDropListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target);\n  (0,_targetAreaListeners_addDragLeaveListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDragTargetListeners);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropListeners/addDragTargetListeners.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropListeners/draggableElementListeners/addDragEndListener.js":
/*!********************************************************************************************!*\
  !*** ./src/utilities/dragAndDropListeners/draggableElementListeners/addDragEndListener.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domManipulationsFunctions.js/addEventListener */ \"./src/utilities/domManipulationsFunctions.js/addEventListener.js\");\n/* harmony import */ var _dragAndDropFunctions_dragend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dragAndDropFunctions/dragend */ \"./src/utilities/dragAndDropFunctions/dragend.js\");\n\n\n\nvar addDragEndListener = function addDragEndListener(target) {\n  console.log(target);\n  (0,_domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, \"dragend\", _dragAndDropFunctions_dragend__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDragEndListener);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropListeners/draggableElementListeners/addDragEndListener.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropListeners/draggableElementListeners/addDragStartListener.js":
/*!**********************************************************************************************!*\
  !*** ./src/utilities/dragAndDropListeners/draggableElementListeners/addDragStartListener.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domManipulationsFunctions.js/addEventListener */ \"./src/utilities/domManipulationsFunctions.js/addEventListener.js\");\n/* harmony import */ var _dragAndDropFunctions_dragstart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dragAndDropFunctions/dragstart */ \"./src/utilities/dragAndDropFunctions/dragstart.js\");\n\n\n\nvar addDragStartListener = function addDragStartListener(target) {\n  (0,_domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, \"dragstart\", _dragAndDropFunctions_dragstart__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDragStartListener);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropListeners/draggableElementListeners/addDragStartListener.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropListeners/targetAreaListeners/addDragDropListener.js":
/*!***************************************************************************************!*\
  !*** ./src/utilities/dragAndDropListeners/targetAreaListeners/addDragDropListener.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domManipulationsFunctions.js/addEventListener */ \"./src/utilities/domManipulationsFunctions.js/addEventListener.js\");\n/* harmony import */ var _dragAndDropFunctions_dragdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dragAndDropFunctions/dragdrop */ \"./src/utilities/dragAndDropFunctions/dragdrop.js\");\n\n\n\nvar addDragDropListener = function addDragDropListener(target) {\n  (0,_domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, \"drop\", _dragAndDropFunctions_dragdrop__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDragDropListener);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropListeners/targetAreaListeners/addDragDropListener.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropListeners/targetAreaListeners/addDragEnterListener.js":
/*!****************************************************************************************!*\
  !*** ./src/utilities/dragAndDropListeners/targetAreaListeners/addDragEnterListener.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domManipulationsFunctions.js/addEventListener */ \"./src/utilities/domManipulationsFunctions.js/addEventListener.js\");\n/* harmony import */ var _dragAndDropFunctions_dragenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dragAndDropFunctions/dragenter */ \"./src/utilities/dragAndDropFunctions/dragenter.js\");\n\n\n\nvar addDragEnterListener = function addDragEnterListener(target) {\n  return (0,_domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, \"dragenter\", _dragAndDropFunctions_dragenter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDragEnterListener);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropListeners/targetAreaListeners/addDragEnterListener.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropListeners/targetAreaListeners/addDragLeaveListener.js":
/*!****************************************************************************************!*\
  !*** ./src/utilities/dragAndDropListeners/targetAreaListeners/addDragLeaveListener.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domManipulationsFunctions.js/addEventListener */ \"./src/utilities/domManipulationsFunctions.js/addEventListener.js\");\n/* harmony import */ var _dragAndDropFunctions_dragleave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dragAndDropFunctions/dragleave */ \"./src/utilities/dragAndDropFunctions/dragleave.js\");\n\n\n\nvar addDragLeaveListener = function addDragLeaveListener(target) {\n  return (0,_domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, \"dragleave\", _dragAndDropFunctions_dragleave__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDragLeaveListener);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropListeners/targetAreaListeners/addDragLeaveListener.js?");

/***/ }),

/***/ "./src/utilities/dragAndDropListeners/targetAreaListeners/addDragOverListener.js":
/*!***************************************************************************************!*\
  !*** ./src/utilities/dragAndDropListeners/targetAreaListeners/addDragOverListener.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domManipulationsFunctions.js/addEventListener */ \"./src/utilities/domManipulationsFunctions.js/addEventListener.js\");\n/* harmony import */ var _dragAndDropFunctions_dragover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dragAndDropFunctions/dragover */ \"./src/utilities/dragAndDropFunctions/dragover.js\");\n\n\n\nvar addDragOverListener = function addDragOverListener(target) {\n  return (0,_domManipulationsFunctions_js_addEventListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, \"dragover\", _dragAndDropFunctions_dragover__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDragOverListener);\n\n//# sourceURL=webpack://todo---project/./src/utilities/dragAndDropListeners/targetAreaListeners/addDragOverListener.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Header/Header.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Header/Header.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".header {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n\\r\\n  width: 100%;\\r\\n  height: 20%;\\r\\n  background-color: #041955;\\r\\n}\\r\\n\\r\\n.header__title {\\r\\n  color: var(--font-100);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo---project/./src/components/Header/Header.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/TodoItem/TodoItem.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/TodoItem/TodoItem.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".todoItem {\\r\\n  width: 90%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-top: 2%;\\r\\n  margin-bottom: 2%;\\r\\n  border: 1px solid black;\\r\\n  cursor: move;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo---project/./src/components/TodoItem/TodoItem.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/TodosContainer/TodosContainer.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/TodosContainer/TodosContainer.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".todosContainer {\\r\\n  width: 100%;\\r\\n  height: 70%;\\r\\n  min-height: 70%;\\r\\n\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.undoneTodos {\\r\\n  width: 40%;\\r\\n  height: 500px;\\r\\n\\r\\n  /* border: 1px solid red; */\\r\\n}\\r\\n\\r\\n.doneTodos {\\r\\n  width: 40%;\\r\\n  height: 500px;\\r\\n  /* border: 1px solid red; */\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo---project/./src/components/TodosContainer/TodosContainer.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Todos/Todos.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Todos/Todos.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".over {\\r\\n  border: 1rem dashed blue;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo---project/./src/components/Todos/Todos.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/app.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/app.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".darkmode {\\r\\n  --primary-100: #041955;\\r\\n  --secondary-100: #3450a1;\\r\\n  --accent-100: #237bff;\\r\\n  --accent-200: #eb06ff;\\r\\n  --font-100: #f3f5f7;\\r\\n}\\r\\n\\r\\n.lightmode {\\r\\n  --primary-100: #f3f5f7;\\r\\n  --secondary-100: #ffffff;\\r\\n  --accent-200: #237bff;\\r\\n  --accent-100: #eb06ff;\\r\\n  --font-100: #f3f5f7;\\r\\n}\\r\\n\\r\\n.app {\\r\\n  color: var(--font-100);\\r\\n  font-family: \\\"Lato\\\";\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo---project/./src/components/app.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global-styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global-styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n* {\\r\\n  margin: 0;\\r\\n}\\r\\nhtml,\\r\\nbody {\\r\\n  height: 100%;\\r\\n}\\r\\nbody {\\r\\n  line-height: 1.5;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n}\\r\\nimg,\\r\\npicture,\\r\\nvideo,\\r\\ncanvas,\\r\\nsvg {\\r\\n  display: block;\\r\\n  max-width: 100%;\\r\\n}\\r\\ninput,\\r\\nbutton,\\r\\ntextarea,\\r\\nselect {\\r\\n  font: inherit;\\r\\n}\\r\\np,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6 {\\r\\n  overflow-wrap: break-word;\\r\\n}\\r\\n#root,\\r\\n#__next {\\r\\n  isolation: isolate;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo---project/./src/global-styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo---project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo---project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/Header/Header.css":
/*!******************************************!*\
  !*** ./src/components/Header/Header.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Header.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/Header/Header.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo---project/./src/components/Header/Header.css?");

/***/ }),

/***/ "./src/components/TodoItem/TodoItem.css":
/*!**********************************************!*\
  !*** ./src/components/TodoItem/TodoItem.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_TodoItem_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./TodoItem.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/TodoItem/TodoItem.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_TodoItem_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_TodoItem_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_TodoItem_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_TodoItem_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo---project/./src/components/TodoItem/TodoItem.css?");

/***/ }),

/***/ "./src/components/TodosContainer/TodosContainer.css":
/*!**********************************************************!*\
  !*** ./src/components/TodosContainer/TodosContainer.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_TodosContainer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./TodosContainer.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/TodosContainer/TodosContainer.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_TodosContainer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_TodosContainer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_TodosContainer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_TodosContainer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo---project/./src/components/TodosContainer/TodosContainer.css?");

/***/ }),

/***/ "./src/components/Todos/Todos.css":
/*!****************************************!*\
  !*** ./src/components/Todos/Todos.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Todos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Todos.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/Todos/Todos.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Todos_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Todos_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_Todos_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_Todos_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo---project/./src/components/Todos/Todos.css?");

/***/ }),

/***/ "./src/components/app.css":
/*!********************************!*\
  !*** ./src/components/app.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./app.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/app.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo---project/./src/components/app.css?");

/***/ }),

/***/ "./src/global-styles.css":
/*!*******************************!*\
  !*** ./src/global-styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global-styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/global-styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo---project/./src/global-styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo---project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo---project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo---project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo---project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo---project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo---project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
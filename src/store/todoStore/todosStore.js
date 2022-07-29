import createStore from "../globalStateFunctions/createStore";
import todosReducer from "./todosReducers/todosReducer";
import themeReducer from "./themeReducers/themeReducer";
import combineReducers from "../globalStateFunctions/combineReducers";
import initialState from "./initialState";

// For adding todoId :/
// To reconsider - shouldnt making access points for state id
let todoId = 0;
export const addTodoId = () => {
  todoId++;
  return todoId.toString();
};
const combinedReducers = combineReducers(todosReducer, themeReducer);

export const todosStore = createStore(combinedReducers, initialState);

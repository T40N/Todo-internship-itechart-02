import { createStore, combineReducers } from "redux";
import todosReducer from "./todosReducers/todosReducer";
import themeReducer from "./themeReducers/themeReducer";

// For adding todoId :/
// To reconsider - shouldnt making access points for state id
let todoId = 0;
export const addTodoId = () => {
  todoId++;
  return todoId.toString();
};
const combinedReducers = combineReducers({
  todos: todosReducer,
  mode: themeReducer,
});

export const todosStore = createStore(combinedReducers);

console.log(todosStore.getState());

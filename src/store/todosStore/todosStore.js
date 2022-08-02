import { createStore, combineReducers } from "redux";
import themeReducer from "./themeReducers/themeReducer";
import todosReducer from "./todosReducers/todosReducer";

let todoID = 0;

export const addTodoId = () => {
  todoID++;
  return todoID.toString();
};

const combinedRecucers = combineReducers({
  todos: todosReducer,
  mode: themeReducer,
});
const TodosStore = createStore(combinedRecucers);

export default TodosStore;

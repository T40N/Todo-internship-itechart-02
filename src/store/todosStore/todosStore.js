import combineReducers from "../globalStateFunctions/combineReducers";
import Store from "../globalStateFunctions/createStore";
import themeReducer from "./themeReducers/themeReducer";
import todosReducer from "./todosReducers/todosReducer";
import initialState from "./initialState";

let todoID = 0;

export const addTodoId = () => {
  todoID++;
  return todoID.toString();
};

const combinedRecucers = combineReducers(todosReducer, themeReducer);
const TodosStore = new Store(combinedRecucers, initialState);

export default TodosStore;

import createStore from "../globalStateFunctions/createStore";
import todosReducer from "./todosReducers/todosReducer";

// For adding todoId :/
// To reconsider - shouldnt making access points for state id
export let todoId = 0;

export const todosStore = createStore(todosReducer);

import createStore from "./storeFunctions/createStore";
import todosReducer from "./todosReducers/todosReducer";
import themeReducer from "./themeReducers/themeReducer";
import combineReducers from "./storeFunctions/combineReducers";
import initialState from "./initialState";

const combinedReducers = combineReducers(todosReducer, themeReducer);

export const store = createStore(combinedReducers, initialState);

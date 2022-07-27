import createStore from "../globalStateFunctions/createStore";
import themeReducer from "./themeReducers/themeReducer";

const themeStore = createStore(themeReducer); // placeholder

export default themeStore;

import todoReducer from "./todoReducer";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todoReducer(undefined, action)];
    case "REMOVE_TODO":
      return state.filter((todo) => {
        return todoReducer(todo, action);
      });
    case "TOGGLE_TODO":
      return state.map((todo) => {
        return todoReducer(todo, action);
      });
    default:
      return state;
  }
};

export default todosReducer;

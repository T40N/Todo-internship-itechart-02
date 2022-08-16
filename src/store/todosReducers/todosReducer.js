import todoReducer from "./todoReducer";

const todosReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, todoReducer(undefined, action)],
        mode: state.mode,
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => {
          return todoReducer(todo, action);
        }),
        mode: state.mode,
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) => {
          return todoReducer(todo, action);
        }),
        mode: state.mode,
      };
    default:
      return state;
  }
};

export default todosReducer;

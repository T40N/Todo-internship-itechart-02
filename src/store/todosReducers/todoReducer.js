const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        done: action.payload.done,
      };
    case "REMOVE_TODO":
      return state.id !== action.payload.id;
    case "TOGGLE_TODO":
      if (state.id !== action.payload.id) {
        return state;
      }
      return {
        ...state,
        done: !state.done,
      };
    default:
      return state;
  }
};

export default todoReducer;

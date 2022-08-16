import store from "./store";

let todoId = 0;

export const toggleTodo = (id) => {
  store.dispatch({
    type: "TOGGLE_TODO",
    payload: {
      id: id,
    },
  });
};

export const addTodo = ({ title, description, done }) => {
  let Id = todoId++;
  store.dispatch({
    type: "ADD_TODO",
    payload: {
      id: Id,
      title,
      description,
      done,
    },
  });
};

export const removeTodo = (id) => {
  store.dispatch({
    type: "REMOVE_TODO",
    payload: {
      id,
    },
  });
};

export const changeTheme = () => {
  store.dispatch({
    type: "TOGGLE_MODE",
  });
};

import { todosStore } from "../../store/todoStore/todosStore";
import { containerId } from "./dragenter";
import { addTodoId } from "../../store/todoStore/todosStore";
//TODO: refactor dragdrop

const dragdrop = (event) => {
  event.stopPropagation();

  const id = event.dataTransfer.getData("text/plain");
  const todoToDrop = todosStore.getState().todos.find((todo) => todo.id === id);

  let copyKeyPressed = false;
  if (event.ctrlKey) {
    copyKeyPressed = true;
  }

  if (checkIfShouldDrop(todoToDrop, containerId)) {
    if (copyKeyPressed) {
      copyTodo(todoToDrop, !todoToDrop.done);
      return;
    }
    toggleTodo(id);
  } else {
    if (copyKeyPressed) {
      copyTodo(todoToDrop, todoToDrop.done);
      return;
    }
  }
};

const checkIfShouldDrop = (todoToDrop, containerId) => {
  return (
    (todoToDrop.done === false && containerId === "done") ||
    (todoToDrop.done === true && containerId === "undone")
  );
};

const toggleTodo = (id) => {
  todosStore.dispatch({
    type: "todosReducer/TOGGLE_TODO",
    payload: {
      id: id,
    },
  });
};

const copyTodo = (todoToAdd, done) => {
  todosStore.dispatch({
    type: "todosReducer/ADD_TODO",
    payload: {
      id: addTodoId(),
      title: todoToDrop.title,
      description: todoToDrop.description,
      done: !todoToDrop.done,
    },
  });
};

export default dragdrop;

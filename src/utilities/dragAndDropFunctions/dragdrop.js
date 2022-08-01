import { todosStore } from "../../store/todoStore/todosStore";
import { containerId } from "./dragenter";
import { addTodoId } from "../../store/todoStore/todosStore";
const dragdrop = (event) => {
  event.stopPropagation();
  let copyKeyPressed = false;
  const id = event.dataTransfer.getData("text/plain");
  if (event.ctrlKey) {
    copyKeyPressed = true;
  }
  const todoToDrop = todosStore.getState().todos.find((todo) => todo.id === id);
  if (
    (todoToDrop.done === false && containerId === "doneTodos") ||
    (todoToDrop.done === true && containerId === "undoneTodos")
  ) {
    if (copyKeyPressed) {
      todosStore.dispatch({
        type: "ADD_TODO",
        payload: {
          id: addTodoId(),
          title: todoToDrop.title,
          description: todoToDrop.description,
          done: !todoToDrop.done,
        },
      });
      return;
    }
    todosStore.dispatch({
      type: "TOGGLE_TODO",
      payload: {
        id: id,
      },
    });
  } else {
    if (copyKeyPressed) {
      todosStore.dispatch({
        type: "ADD_TODO",
        payload: {
          id: addTodoId(),
          title: todoToDrop.title,
          description: todoToDrop.description,
          done: todoToDrop.done,
        },
      });
      return;
    }
  }
};

export default dragdrop;

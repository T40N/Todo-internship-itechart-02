import { todosStore } from "../../store/todoStore/todosStore";
import { containerId } from "./dragenter";
import { copyKeyPressed } from "./copyKeyDetect";
import { addTodoId } from "../../store/todoStore/todosStore";
const dragdrop = (event) => {
  event.stopPropagation();
  const id = event.dataTransfer.getData("text/plain");
  const todoToDrop = todosStore.getState().todos.find((todo) => todo.id === id);
  if (
    (todoToDrop.done === false && containerId === "doneTodos") ||
    (todoToDrop.done === true && containerId === "undoneTodos")
  ) {
    if (copyKeyPressed) {
      todosStore.dispatch({
        type: "todosReducer/ADD_TODO",
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
      type: "todosReducer/TOGGLE_TODO",
      payload: {
        id: id,
      },
    });
  } else {
    if (copyKeyPressed) {
      todosStore.dispatch({
        type: "todosReducer/ADD_TODO",
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

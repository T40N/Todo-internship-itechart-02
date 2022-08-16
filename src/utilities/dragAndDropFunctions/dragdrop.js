import { todosStore } from "../../store/todoStore/todosStore";
import { containerId } from "./dragenter";
import { addTodo, toggleTodo } from "../../store/actions";

const dragdrop = (event) => {
  event.stopPropagation();

  const id = event.dataTransfer.getData("text/plain");
  const { title, description, done } = getTodoToDrop(id);

  let copyKeyPressed = false;
  if (event.ctrlKey) {
    copyKeyPressed = true;
  }

  if (checkIfShouldDrop(todoToDrop, containerId)) {
    if (copyKeyPressed) {
      let toggleDone = done;

      addTodo({ title, description, toggleDone });
      return;
    }
    toggleTodo(id);
    return;
  }

  if (copyKeyPressed) {
    addTodo({ title, description, done });
    return;
  }
};

const checkIfShouldDrop = (todoToDrop, containerId) => {
  return (
    (todoToDrop.done === false && containerId === "done") ||
    (todoToDrop.done === true && containerId === "undone")
  );
};

const getTodoToDrop = (elementID) => {
  return todosStore.getState().todos.find((todo) => todo.id === elementID);
};

export default dragdrop;

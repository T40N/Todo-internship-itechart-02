import { store } from "../../store/store";
import { addTodo, toggleTodo } from "../../store/actions";
import { containerId } from "./Todos";

const drop = (event) => {
  event.stopPropagation();

  const id = event.dataTransfer.getData("text/plain");
  const { title, description, done } = getTodoToDrop(id);

  let copyKeyPressed = false;
  if (event.ctrlKey) {
    copyKeyPressed = true;
  }

  if (checkIfShouldDrop(done, containerId)) {
    if (copyKeyPressed) {
      let toggleDone = !done;

      addTodo({ title, description, done: toggleDone });
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

const checkIfShouldDrop = (done, containerId) => {
  return (
    (done === false && containerId === "done") ||
    (done === true && containerId === "undone")
  );
};

const getTodoToDrop = (elementID) => {
  return store.getState().todos.find((todo) => todo.id !== elementID);
};

export default drop;

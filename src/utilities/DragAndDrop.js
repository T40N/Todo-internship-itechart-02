import TodosStore from "../store/todosStore/todosStore";
import { addTodoId } from "../store/todosStore/todosStore";
class DragAndDrop {
  constructor() {
    if (DragAndDrop.exists) {
      return DragAndDrop.instance;
    }
    this.elementID = "";
    this.containerId = "";
    DragAndDrop.exists = true;
    DragAndDrop.instance = this;
  }

  start(event) {
    event.target.style.opacity = "0.4";
    this.elementID = event.target.id;
  }

  end(event) {
    event.target.style.opacity = "1";
  }

  enter(event) {
    if (event.target.classList.contains("todos")) {
      event.target.classList.add("over");
      this.containerId = event.target.id;
    }
  }

  leave(event) {
    event.target.classList.remove("over");
  }

  over(event) {
    event.preventDefault();
  }

  drop(event) {
    event.stopPropagation();

    let copyKeyPressed = false;
    if (event.ctrlKey) {
      copyKeyPressed = true;
    }

    this.getTodoToDrop();

    if (this.checkIfShouldDrop()) {
      if (copyKeyPressed) {
        this.copyTodo(!this.todoToDrop.done);
        return;
      }

      this.toggleTodo(this.elementID);
      return;
    }

    if (copyKeyPressed) {
      this.copyTodo(this.todoToDrop.done);
      return;
    }
  }

  getTodoToDrop() {
    this.todoToDrop = TodosStore.getState().todos.find(
      (todo) => todo.id === this.elementID
    );
  }

  checkIfShouldDrop() {
    return (
      (this.todoToDrop.done === false && this.containerId === "done") ||
      (this.todoToDrop.done === true && this.containerId === "undone")
    );
  }

  copyTodo(done) {
    TodosStore.dispatch({
      type: "todosReducer/ADD_TODO",
      payload: {
        id: addTodoId(),
        title: this.todoToDrop.title,
        description: this.todoToDrop.description,
        done: done,
      },
    });
  }

  toggleTodo(id) {
    TodosStore.dispatch({
      type: "todosReducer/TOGGLE_TODO",
      payload: {
        id: id,
      },
    });
  }
}

const Drag = new DragAndDrop();

export default Drag;

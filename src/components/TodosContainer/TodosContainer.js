import BaseComponent from "../BaseComponent/BaseComponent";
import TodosStore from "../../store/todosStore/todosStore";
import Todos from "../Todos/Todos";
import "./TodosContainer.css";

class TodosContainer extends BaseComponent {
  constructor(container) {
    super("section", container);
    this.addClassName("app__todos-container");
    this.segregateTodosData();
    this.renderChilds();
  }

  segregateTodosData() {
    this.undoneTodosData = TodosStore.getState().todos.filter(
      (todo) => todo.done !== true
    );
    this.doneTodosData = TodosStore.getState().todos.filter(
      (todo) => todo.done !== false
    );
  }

  renderChilds() {
    this.UndoneTodos = new Todos(
      this.htmlElement,
      "app__undone-todos",
      this.undoneTodosData,
      "Undone",
      "undone"
    );
    this.DoneTodos = new Todos(
      this.htmlElement,
      "app__done-todos",
      this.doneTodosData,
      "Done",
      "done"
    );
  }
}

export default TodosContainer;

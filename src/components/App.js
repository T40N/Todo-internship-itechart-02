import TodosStore from "../store/todosStore/todosStore";
import AddTodoForm from "./AddTodoForm/AddTodoForm";
import BaseComponent from "./BaseComponent/BaseComponent";
import Header from "./Header/Header";
import TodosContainer from "./TodosContainer/TodosContainer";
import "./App.css";

class App extends BaseComponent {
  constructor(container) {
    super("div", container);
    this.addClassName("app");
    this.renderChilds();
    this.updateStyle();
    TodosStore.subscribe(this.updateTodos.bind(this));
    TodosStore.subscribe(this.updateStyle.bind(this));
  }

  renderChilds() {
    this.Header = new Header(this.htmlElement);
    this.Form = new AddTodoForm(this.htmlElement);
    this.TodosContainer = new TodosContainer(this.htmlElement);
  }

  updateTodos() {
    console.log("update");
    this.TodosContainer.dismount();
    this.TodosContainer = new TodosContainer(this.htmlElement);
  }

  updateStyle() {
    const mode = TodosStore.getState().mode;

    if (mode === "lightmode") {
      this.removeClassName("darkmode");
    }
    if (mode === "darkmode") {
      this.removeClassName("lightmode");
    }

    this.addClassName(mode);
  }
}

export default App;

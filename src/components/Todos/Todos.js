import Drag from "../../utilities/DragAndDrop";
import BaseComponent from "../BaseComponent/BaseComponent";
import TodoItem from "../TodoItem/TodoItem";
import "./Todos.css";

class Todos extends BaseComponent {
  constructor(container, className, listOfTodos, title, id) {
    super("div", container);
    this.setAttribute("id", id);
    this.listOfTodos = listOfTodos;
    this.title = title;
    this.todosElements = [];
    this.addClassName("todos");
    this.addClassName(className);
    this.renderChilds();
    this.addEventListeners();
  }

  renderChilds() {
    this.TodosTitle = new BaseComponent("h2", this.htmlElement);
    this.TodosTitle.addInnerHTML(this.title);
    this.TodosTitle.addClassName("todos__title");
    this.todosElements = this.listOfTodos.map((todo) => {
      return new TodoItem(
        this.htmlElement,
        todo.title,
        todo.description,
        todo.id
      );
    });
  }

  addEventListeners() {
    this.addNewEventListener("dragenter", Drag.enter.bind(Drag));
    this.addNewEventListener("dragover", Drag.over.bind(Drag));
    this.addNewEventListener("drop", Drag.drop.bind(Drag));
    this.addNewEventListener("dragleave", Drag.leave.bind(Drag));
  }
}

export default Todos;

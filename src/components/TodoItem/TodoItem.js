import BaseComponent from "../BaseComponent/BaseComponent";
import Button from "../Button/Button";
import TodosStore from "../../store/todosStore/todosStore";
import "./TodoItem.css";
import Drag from "../../utilities/DragAndDrop";

class TodoItem extends BaseComponent {
  constructor(container, titleText, descriptionText, todoID) {
    super("div", container);
    this.addClassName("todo-item");
    this.setAttribute("id", todoID);
    this.setAttribute("draggable", true);
    this.titleText = titleText;
    this.descriptionText = descriptionText;
    this.todoID = todoID;
    this.Drag = Drag;
    this.renderChilds();
    this.addEventListeners();
  }

  renderChilds() {
    this.DescriptionContainer = new BaseComponent("div", this.htmlElement);
    this.DescriptionContainer.addClassName("todo-item__description-container");

    this.ButtonContainer = new BaseComponent("div", this.htmlElement);
    this.ButtonContainer.addClassName("todo-item__button-container");

    this.TodoTitle = new BaseComponent(
      "h1",
      this.DescriptionContainer.getHtmlElement()
    );
    this.TodoTitle.addInnerHTML(this.titleText);
    this.TodoTitle.addClassName("todo-item__title");

    this.TodoDescription = new BaseComponent(
      "p",
      this.DescriptionContainer.getHtmlElement()
    );
    this.TodoDescription.addInnerHTML(this.descriptionText);
    this.TodoDescription.addClassName("todo-item__description");

    this.DeleteButton = new Button(this.ButtonContainer.getHtmlElement());
    this.DeleteButton.addInnerHTML("-");
    this.DeleteButton.addClassName("todo-item__delete-button");
  }

  addEventListeners() {
    this.addNewEventListener("dragstart", Drag.start.bind(Drag));
    this.addNewEventListener("dragend", Drag.end.bind(Drag));
    this.DeleteButton.addNewEventListener(
      "click",
      this.onDeleteHandler.bind(this)
    );
  }

  onDeleteHandler() {
    TodosStore.dispatch({
      type: "REMOVE_TODO",
      payload: {
        id: this.todoID,
      },
    });
  }
}

export default TodoItem;

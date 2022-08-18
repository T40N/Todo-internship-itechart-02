import { render } from "../../utilities";
import Button from "../Button";
import "./TodoItem.css";
import { removeTodo } from "../../store/actions";
import { setDraggableListeners } from "../../utilities";

const TodoItem = (container, todoTitle, todoDescription, todoId) => {
  let id = todoId;
  const element = render("div", container, "todo-item");
  element.setAttribute("id", id);
  element.setAttribute("draggable", true);

  const descriptionContainer = render(
    "div",
    element,
    "todo-item__description-container"
  );
  const buttonContainer = render("div", element, "todo-item__button-container");

  const onDeleteHandler = () => {
    removeTodo(id);
  };

  const title = render("h1", descriptionContainer, "todo-item__title");
  title.innerHTML = todoTitle;

  const description = render(
    "p",
    descriptionContainer,
    "todo-item__description"
  );
  description.innerHTML = todoDescription;

  const deleteButton = Button(buttonContainer, "-", onDeleteHandler);
  deleteButton.classList.add("todo-item__delete-button");

  const onDragStart = (event) => {
    event.target.style.opacity = "0.4";

    event.dataTransfer.setData("text/plain", event.target.id);
  };

  const onDragEnd = (event) => {
    event.target.style.opacity = "1";
  };

  setDraggableListeners(element, {
    onDragStart,
    onDragEnd,
  });

  return {
    id,
    element,
    title,
    description,
  };
};

export default TodoItem;

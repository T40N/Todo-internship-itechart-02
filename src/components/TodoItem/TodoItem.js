import render from "../../utilities/domManipulationsFunctions/render";
import Button from "../Button/Button";
import "./TodoItem.css";
import { todosStore } from "../../store/todoStore/todosStore";
import addDragElemListeners from "../../utilities/dragAndDropListeners/addDragElemListeners";
import addClass from "../../utilities/domManipulationsFunctions.js/addClass";

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
    todosStore.dispatch({
      type: "todosReducer/REMOVE_TODO",
      payload: {
        id: id,
      },
    });
  };

  addDragElemListeners(element);

  const title = render("h1", descriptionContainer, "todo-item__title");
  title.innerHTML = todoTitle;

  const description = render(
    "p",
    descriptionContainer,
    "todo-item__description"
  );
  description.innerHTML = todoDescription;

  const deleteButton = Button(buttonContainer, "-", onDeleteHandler);
  addClass(deleteButton, "todo-item__delete-button");
  return {
    id,
    element,
    title,
    description,
  };
};

export default TodoItem;

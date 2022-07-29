import render from "../../utilities/domManipulationsFunctions.js/render";
import Button from "../Button/Button";
import "./TodoItem.css";
import { todosStore } from "../../store/todoStore/todosStore";
import addDragElemListeners from "../../utilities/dragAndDropListeners/addDragElemListeners";

const TodoItem = (container, todoTitle, todoDescription, todoId) => {
  let id = todoId;
  const element = render("div", container, "todoItem");
  element.setAttribute("id", id);
  element.setAttribute("draggable", true);

  const onDeleteHandler = () => {
    todosStore.dispatch({
      type: "todosReducer/REMOVE_TODO",
      payload: {
        id: id,
      },
    });
  };

  addDragElemListeners(element);

  const title = render("h1", element, "title");
  title.innerHTML = todoTitle;

  const description = render("p", element, "description");
  description.innerHTML = todoDescription;

  const deleteButton = Button(element, onDeleteHandler);
  return {
    id,
    element,
    title,
    description,
  };
};

export default TodoItem;

import render from "../../utilities/render";
import Button from "../Button/Button";
import { todosStore } from "../../store/todoStore/todosStore";

const TodoItem = (container, todoTitle, todoDescription, todoId) => {
  let id = todoId;
  const element = render("div", container, "todoItem");
  element.setAttribute("id", id);

  const onDeleteHandler = () => {
    todosStore.dispatch({
      type: "REMOVE_TODO",
      payload: {
        id: id,
      },
    });
  };

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

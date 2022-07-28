import render from "../../utilities/render";
import renderTodos from "../../utilities/renderTodos";

const Todos = (container, listOfTodos, title, className) => {
  const element = render("div", container, className);
  const todosTitle = render("h2", element, "title");
  todosTitle.innerHTML = title;
  const todos = renderTodos(element, listOfTodos);

  return {
    element,
    todos,
  };
};

export default Todos;

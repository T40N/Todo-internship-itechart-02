import render from "../../utilities/render";
import renderTodos from "../../utilities/renderTodos";

const Todos = (container, listOfTodos, className) => {
  const element = render("div", container, className);
  const todos = renderTodos(element, listOfTodos);

  return {
    element,
    todos,
  };
};

export default Todos;

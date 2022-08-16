import render from "../../utilities/domManipulationsFunctions/render";
import addDragTargetListeners from "../../utilities/dragAndDropListeners/addDragTargetListeners";
import renderTodos from "../../utilities/domManipulationsFunctions/renderTodos";
import "./Todos.css";
import addClass from "../../utilities/domManipulationsFunctions/addClass";

const Todos = (container, listOfTodos, title, className) => {
  const element = render("div", container, "todos");
  addClass(element, className);
  element.setAttribute("id", className);
  const todosTitle = render("h2", element, "title");
  todosTitle.innerHTML = title;
  const todos = renderTodos(element, listOfTodos);

  addDragTargetListeners(element);

  return {
    element,
    todos,
  };
};

export default Todos;

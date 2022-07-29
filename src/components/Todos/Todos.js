import render from "../../utilities/domManipulationsFunctions.js/render";
import addDragTargetListeners from "../../utilities/dragAndDropListeners/addDragTargetListeners";
import renderTodos from "../../utilities/domManipulationsFunctions.js/renderTodos";
import "./Todos.css";

const Todos = (container, listOfTodos, title, className) => {
  const element = render("div", container, className);
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

import render from "../../utilities/domManipulationsFunctions.js/render";
import addDragTargetListeners from "../../utilities/dragAndDropListeners/addDragTargetListeners";
import renderTodos from "../../utilities/domManipulationsFunctions.js/renderTodos";
import "./Todos.css";
import addClass from "../../utilities/domManipulationsFunctions.js/addClass";

const Todos = (container, listOfTodos, title, className, id) => {
  const element = render("div", container, "todos");
  addClass(element, className);
  element.setAttribute("id", id);
  const todosTitle = render("h2", element, "todos__title");
  todosTitle.innerHTML = title;
  const todos = renderTodos(element, listOfTodos);

  addDragTargetListeners(element);

  return {
    element,
    todos,
  };
};

export default Todos;

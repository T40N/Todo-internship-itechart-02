import render from "../../utilities/domManipulationsFunctions/render";
import "./Todos.css";
import addClass from "../../utilities/domManipulationsFunctions/addClass";
import drop from "./drop";

export let containerId = "";

const Todos = (container, listOfTodos, title, className, id) => {
  const element = render("div", container, "todos");
  //TODO: change addClass function
  addClass(element, className);
  element.setAttribute("id", id);
  const todosTitle = render("h2", element, "todos__title");
  todosTitle.innerHTML = title;
  const todos = renderTodos(element, listOfTodos);

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDragEnter = (event) => {
    if (event.target.classList.contains("todos")) {
      event.target.classList.add("over");
      containerId = event.target.id;
    }
  };

  const onDragLeave = (event) => {
    event.target.classList.remove("over");
  };

  setDroppableListeners(element, {
    onDrop: drop,
    onDragOver,
    onDragEnter,
    onDragLeave,
  });

  return {
    element,
    todos,
  };
};

const renderTodos = (container, listOfTodos) => {
  return listOfTodos.map((todo) => {
    return TodoItem(container, todo.title, todo.description, todo.id);
  });
};

export default Todos;

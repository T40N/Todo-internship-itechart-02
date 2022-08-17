import render from "../../utilities/render";
import "./Todos.css";
import drop from "./drop";
import TodoItem from "../TodoItem/TodoItem";
import { setDroppableListeners } from "../../utilities/setDragListeners";

export let containerId = "";

const Todos = (container, listOfTodos, title, className, id) => {
  const element = render("div", container, "todos");
  element.classList.add(className);
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

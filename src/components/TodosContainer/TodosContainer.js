import render from "../../utilities/domManipulationsFunctions.js/render";
import Todos from "../Todos/Todos";
import { todosStore } from "../../store/todoStore/todosStore";
import "./TodosContainer.css";

const TodosContainer = (container) => {
  const element = render("div", container, "todosContainer");

  const undoneTodosList = todosStore.getState().todos.filter((todo) => {
    return todo.done === false;
  });
  const doneTodosList = todosStore
    .getState()
    .todos.filter((todo) => todo.done === true);

  const undoneTodos = Todos(element, undoneTodosList, "Undone", "undoneTodos");
  const doneTodos = Todos(element, doneTodosList, "Done", "doneTodos");

  return {
    element,
    undoneTodos,
    doneTodos,
  };
};

export default TodosContainer;

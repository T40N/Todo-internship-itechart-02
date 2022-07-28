import render from "../../utilities/render";
import Todos from "../Todos/Todos";
import { todosStore } from "../../store/todoStore/todosStore";
import "./TodosContainer.css";

const TodosContainer = (container) => {
  const element = render("div", container, "todosContainer");

  const undoneTodosList = todosStore.getState().filter((todo) => {
    return todo.done === false;
  });
  const doneTodosList = todosStore
    .getState()
    .filter((todo) => todo.done === true);

  const undoneTodos = Todos(
    element,
    undoneTodosList,
    "Undone todos",
    "undoneTodos"
  );
  const doneTodos = Todos(element, doneTodosList, "Done todos", "doneTodos");

  return {
    element,
    undoneTodos,
    doneTodos,
  };
};

export default TodosContainer;

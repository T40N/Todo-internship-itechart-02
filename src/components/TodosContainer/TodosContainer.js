import render from "../../utilities/domManipulationsFunctions/render";
import Todos from "../Todos/Todos";
import { todosStore } from "../../store/todoStore/todosStore";
import "./TodosContainer.css";

const TodosContainer = (container) => {
  const element = render("div", container, "app__todos-container");

  const undoneTodosList = todosStore.getState().todos.filter((todo) => {
    return todo.done === false;
  });
  const doneTodosList = todosStore
    .getState()
    .todos.filter((todo) => todo.done === true);

  const undoneTodos = Todos(
    element,
    undoneTodosList,
    "Undone",
    "app__undone-todos",
    "undone"
  );
  const doneTodos = Todos(
    element,
    doneTodosList,
    "Done",
    "app__done-todos",
    "done"
  );

  //TODO: refactor of subscribe function

  return {
    element,
    undoneTodos,
    doneTodos,
  };
};

export default TodosContainer;

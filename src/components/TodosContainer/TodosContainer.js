import render from "../../utilities/render";
import Todos from "../Todos/Todos";
import { todosStore } from "../../store/todoStore/todosStore";

const TodosContainer = (container) => {
  const element = render("div", container, "todosContainer");

  const undoneTodosList = todosStore.getState().filter((todo) => {
    return todo.done === false;
  });
  const doneTodosList = todosStore
    .getState()
    .filter((todo) => todo.done === true);

  const undoneTodos = Todos(element, undoneTodosList, "undoneTodos");
  const doneTodos = Todos(element, doneTodosList, "doneTodos");

  return {
    element,
    undoneTodos,
    doneTodos,
  };
};

export default TodosContainer;

import render from "../../utilities/render";
import Todos from "../Todos/Todos";
import { store } from "../../store/store";
import "./TodosContainer.css";

const TodosContainer = (container) => {
  const element = render("div", container, "app__todos-container");
  let undoneTodos = null;
  let doneTodos = null;

  const updateTodos = () => {
    if (undoneTodos && doneTodos) {
      undoneTodos.element.remove();
      doneTodos.element.remove();
    }

    const todos = store.getState().todos;

    const undoneTodosList = todos.filter((todo) => {
      return todo.done === false;
    });
    const doneTodosList = todos.filter((todo) => todo.done === true);

    undoneTodos = Todos(
      element,
      undoneTodosList,
      "Undone",
      "app__undone-todos",
      "undone"
    );
    doneTodos = Todos(
      element,
      doneTodosList,
      "Done",
      "app__done-todos",
      "done"
    );
  };

  updateTodos();

  store.subscribe(updateTodos);
  return {
    element,
  };
};

export default TodosContainer;

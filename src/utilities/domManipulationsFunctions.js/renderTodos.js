import TodoItem from "../../components/TodoItem/TodoItem";

const renderTodos = (container, listOfTodos) => {
  return listOfTodos.map((todo) => {
    return TodoItem(container, todo.title, todo.description, todo.id);
  });
};

export default renderTodos;

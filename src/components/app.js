import { todosStore } from "../store/todoStore/todosStore";
import render from "../utilities/render";
import unmountElem from "../utilities/unmountElem";
import Form from "./Form/Form";
import TodosContainer from "./TodosContainer/TodosContainer";

// main commponent
const App = (container) => {
  const element = render("div", container, "appContainer");

  const form = Form(element);
  let todos = TodosContainer(element);

  const updateTodos = () => {
    unmountElem(todos.element);
    todos = TodosContainer(element);
  };

  todosStore.subscribe(updateTodos);
  return element;
};

export default App;

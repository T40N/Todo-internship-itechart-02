import { todosStore } from "../store/todoStore/todosStore";
import render from "../utilities/domManipulationsFunctions.js/render";
import unmountElem from "../utilities/domManipulationsFunctions.js/unmountElem";
import addCopyOptionListener from "../utilities/dragAndDropListeners/addCopyOptionListener";
import Form from "./Form/Form";
import TodosContainer from "./TodosContainer/TodosContainer";
import addClass from "../utilities/domManipulationsFunctions.js/addClass";
import removeClass from "../utilities/domManipulationsFunctions.js/removeClass";
import Header from "./Header/Header";
import "./app.css";

const App = (container) => {
  const element = render("div", container, "app");
  const header = Header(element, "Your tasks for today!");
  const form = Form(element);
  let todos = TodosContainer(element);

  const updateTodos = () => {
    unmountElem(todos.element);
    todos = TodosContainer(element);
  };

  const updateStyle = () => {
    const mode = todosStore.getState().mode;
    if (mode === "lightmode") {
      removeClass(element, "darkmode");
    }
    if (mode === "darkmode") {
      removeClass(element, "lightmode");
    }
    addClass(element, mode);
  };

  updateStyle();
  addCopyOptionListener();
  todosStore.subscribe(updateTodos);
  todosStore.subscribe(updateStyle);
  return element;
};

export default App;

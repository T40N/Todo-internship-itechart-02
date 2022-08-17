import { todosStore } from "../store/todoStore/todosStore";
import render from "../utilities/domManipulationsFunctions/render";
import unmountElem from "../utilities/domManipulationsFunctions/unmountElem";
import Form from "./Form/Form";
import TodosContainer from "./TodosContainer/TodosContainer";
import addClass from "../utilities/domManipulationsFunctions/addClass";
import removeClass from "../utilities/domManipulationsFunctions/removeClass";
import Header from "./Header/Header";
import "./app.css";

const App = (container) => {
  const element = render("div", container, "app");
  const header = Header(element, "Your tasks for today!");
  const form = Form(element);
  const todos = TodosContainer(element);
  return element;
};

export default App;

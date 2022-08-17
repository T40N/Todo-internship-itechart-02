import render from "../utilities/render";
import Form from "./Form/Form";
import TodosContainer from "./TodosContainer/TodosContainer";
import Header from "./Header/Header";
import "./app.css";

const App = (container) => {
  const element = render("div", container, "app");
  const header = Header(element, "Your tasks for today!");
  const form = Form(element);
  let todos = TodosContainer(element);

  return element;
};

export default App;

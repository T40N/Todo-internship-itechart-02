import { render } from "./utilities";
import { Header, TodosContainer, Form } from "./components";
import "./app.css";

const App = (container) => {
  const element = render("div", container, "app");
  const header = Header(element, "Your tasks for today!");
  const form = Form(element);
  let todos = TodosContainer(element);

  return element;
};

export default App;

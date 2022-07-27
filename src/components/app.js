import BaseComponent from "./BaseComponent/BaseComponent";
import Form from "./Form/Form";

// main commponent
const App = () => {
  const body = document.querySelector("body");
  const base = BaseComponent("div", body);
  const element = base.create();
  base.mount();

  const form = Form("form");

  return element;
};

export default App;

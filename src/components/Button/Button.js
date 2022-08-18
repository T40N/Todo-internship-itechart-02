import { render } from "../../utilities";
import "./Button.css";
const Button = (container, buttonText, eventCallback) => {
  const element = render("button", container, "button");
  element.innerHTML = buttonText;
  element.addEventListener("click", (event) => eventCallback(event));
  return element;
};

export default Button;

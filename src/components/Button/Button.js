import render from "../../utilities/domManipulationsFunctions/render";
import addEventListener from "../../utilities/domManipulationsFunctions/addEventListener";
import "./Button.css";
const Button = (container, buttonText, eventCallback) => {
  const element = render("button", container, "button");
  element.innerHTML = buttonText;
  addEventListener(element, "click", eventCallback);
  return element;
};

export default Button;

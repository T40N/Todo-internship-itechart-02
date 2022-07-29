import render from "../../utilities/domManipulationsFunctions.js/render";
import addEventListener from "../../utilities/domManipulationsFunctions.js/addEventListener";
const Button = (container, eventCallback) => {
  const element = render("button", container, "button");
  addEventListener(element, "click", eventCallback);
  return element;
};

export default Button;

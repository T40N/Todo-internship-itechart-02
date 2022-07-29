import addEventListener from "../../utilities/domManipulationsFunctions.js/addEventListener";
import render from "../../utilities/domManipulationsFunctions.js/render";

const Input = (container, eventCallback) => {
  const element = render("input", container, "input");
  addEventListener(element, "input", eventCallback);
  return element;
};

export default Input;

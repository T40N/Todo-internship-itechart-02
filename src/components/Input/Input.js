import addEventListener from "../../utilities/domManipulationsFunctions.js/addEventListener";
import render from "../../utilities/domManipulationsFunctions.js/render";
import "./input.css";

const Input = (container, eventCallback, placeholder) => {
  const inputContainer = render("div", container, "input-container");
  const label = render("label", inputContainer, `label`);
  label.setAttribute("for", placeholder);
  label.innerHTML = placeholder;
  const element = render("input", inputContainer, "input");
  element.setAttribute("placeholder", placeholder);
  element.setAttribute("name", placeholder);
  addEventListener(element, "input", eventCallback);
  return {
    label,
    element,
  };
};

export default Input;

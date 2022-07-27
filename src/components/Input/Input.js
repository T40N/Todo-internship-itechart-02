import addEventListener from "../../utilities/addEventListener";
import render from "../../utilities/render";

const Input = (container, eventCallback) => {
  const element = render("input", container, "input");
  addEventListener(element, "input", eventCallback);
  return element;
};

export default Input;

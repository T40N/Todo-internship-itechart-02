import render from "../../utilities/render";
import addEventListener from "../../utilities/addEventListener";
const Button = (container, eventCallback) => {
  const element = render("button", container, "button");
  addEventListener(element, "click", eventCallback);
  return element;
};

export default Button;

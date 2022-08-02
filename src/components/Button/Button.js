import BaseComponent from "../BaseComponent/BaseComponent";
import "./Button.css";

class Button extends BaseComponent {
  constructor(container) {
    super("button", container);
    this.addClassName("button");
  }
}

export default Button;

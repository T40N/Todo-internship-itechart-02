import BaseComponent from "../BaseComponent/BaseComponent";
import "./CustomInput.css";

class CustomInput extends BaseComponent {
  constructor(container, placeholder) {
    super("div", container);
    this.placeholder = placeholder;
    this.addClassName("input-container");
    this.renderChilds();
  }

  renderChilds() {
    this.Label = new BaseComponent("label", this.htmlElement);
    this.Label.setAttribute("for", this.placeholder);
    this.Label.addInnerHTML(this.placeholder);
    this.Label.addClassName("label");

    this.Input = new BaseComponent("input", this.htmlElement);
    this.Input.setAttribute("placeholder", this.placeholder);
    this.Input.setAttribute("name", this.placeholder);
    this.Input.addClassName("input");
  }

  addEventListener(eventCallback) {
    this.Input.addEventListener("input", eventCallback);
  }
}

export default CustomInput;

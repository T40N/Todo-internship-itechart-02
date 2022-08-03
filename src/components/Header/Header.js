import BaseComponent from "../BaseComponent/BaseComponent";
import Button from "../Button/Button";
import TodosStore from "../../store/todosStore/todosStore";
import "./Header.css";
const darkmode = require("../../assets/darkmode.svg");
const lightmode = require("../../assets/lightmode.svg");

class Header extends BaseComponent {
  constructor(container) {
    super("header", container);
    this.addClassName("app__header");
    this.renderChilds();
    this.addEventListeners();
    TodosStore.subscribe(this.changeModeHandler.bind(this));
  }

  renderChilds() {
    this.HeaderTitle = new BaseComponent("h1", this.htmlElement);
    this.HeaderTitle.addClassName("header__title");
    this.HeaderTitle.addInnerHTML("Your tasks for today!");

    this.ModeButton = new Button(this.htmlElement);
    this.ModeButton.addClassName("header__mode-button");

    this.ModeImg = new BaseComponent("img", this.htmlElement);
    this.ModeImg.setAttribute("src", darkmode);
    this.ModeButton.appendChild(this.ModeImg.getHtmlElement());
  }

  addEventListeners() {
    this.ModeButton.addNewEventListener("click", this.changeMode.bind(this));
  }

  changeMode() {
    TodosStore.dispatch({
      type: "themeReducer/TOGGLE_MODE",
    });
  }

  changeModeHandler() {
    if (TodosStore.getState().mode === "lightmode") {
      this.ModeImg.setAttribute("src", lightmode);
    }
    if (TodosStore.getState().mode === "darkmode") {
      this.ModeImg.setAttribute("src", darkmode);
    }
  }
}

export default Header;

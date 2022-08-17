import render from "../../utilities/render";
import Button from "../Button/Button";
import { todosStore } from "../../store/todoStore/todosStore";
const lightmode = require("../../assets/lightmode.svg");
const darkmode = require("../../assets/darkmode.svg");
import "./Header.css";

const Header = (container, titleText) => {
  const element = render("header", container, "header");
  const changeModeHandler = () => {
    todosStore.dispatch({
      type: "themeReducer/TOGGLE_MODE",
    });
  };

  const headerTitle = render("h1", element, "header__title");
  headerTitle.innerHTML = titleText;
  const modeButton = Button(element, "", changeModeHandler);
  const buttonImg = render("img", modeButton, "modeImg");

  const updateStyle = () => {
    const mode = todosStore.getState().mode;
    const body = document.querySelector("body");
    if (mode === "lightmode") {
      body.classList.remove("lightmode");
      buttonImg.setAttribute("src", darkmode);
    }
    if (mode === "darkmode") {
      body.classList.remove("lightmode");
      buttonImg.setAttribute("src", lightmode);
    }
    body.classList.add(mode);
  };

  body.classList.add(mode);
  buttonImg.setAttribute("src", darkmode);
  todosStore.subscribe(updateStyle);
  modeButton.classList.add("header__mode-button");

  return {
    element,
    headerTitle,
    modeButton,
  };
};

export default Header;

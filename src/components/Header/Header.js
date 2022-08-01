import render from "../../utilities/domManipulationsFunctions.js/render";
import Button from "../Button/Button";
import { todosStore } from "../../store/todoStore/todosStore";
import addClass from "../../utilities/domManipulationsFunctions.js/addClass";
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

  const modeChange = () => {
    if (todosStore.getState().mode === "lightmode") {
      buttonImg.setAttribute("src", lightmode);
    }
    if (todosStore.getState().mode === "darkmode") {
      buttonImg.setAttribute("src", darkmode);
    }
  };

  modeChange();
  todosStore.subscribe(modeChange);
  addClass(modeButton, "header__mode-button");

  return {
    element,
    headerTitle,
    modeButton,
  };
};

export default Header;

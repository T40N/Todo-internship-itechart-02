import render from "../../utilities/render";
import Button from "../Button/Button";
import { store } from "../../store/store";
const lightmode = require("../../assets/lightmode.svg");
const darkmode = require("../../assets/darkmode.svg");
import "./Header.css";
import { toggleMode } from "../../store/actions";

const Header = (container, titleText) => {
  const element = render("header", container, "header");
  const body = document.querySelector("body");
  const mode = store.getState().mode;

  const changeModeHandler = () => {
    toggleMode();
  };

  const headerTitle = render("h1", element, "header__title");
  headerTitle.innerHTML = titleText;
  const modeButton = Button(element, "", changeModeHandler);
  const buttonImg = render("img", modeButton, "modeImg");

  const updateStyle = () => {
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
  store.subscribe(updateStyle);
  modeButton.classList.add("header__mode-button");

  return {
    element,
    headerTitle,
    modeButton,
  };
};

export default Header;

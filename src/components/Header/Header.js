import render from "../../utilities/domManipulationsFunctions.js/render";
import Button from "../Button/Button";
import { todosStore } from "../../store/todoStore/todosStore";
import addClass from "../../utilities/domManipulationsFunctions.js/addClass";
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
  const modeButton = Button(element, changeModeHandler);
  addClass(modeButton, "header__mode-button");

  return {
    element,
    headerTitle,
    modeButton,
  };
};

export default Header;

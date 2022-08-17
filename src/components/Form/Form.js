import render from "../../utilities/render";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Form.css";
import { addTodo } from "../../store/actions";

const Form = (container) => {
  let titleInputValue = "";
  let descriptionInputValue = "";

  const onTitleChangeHandler = (event) => {
    titleInputValue = event.target.value;
  };

  const onDescriptionChangeHandler = (event) => {
    descriptionInputValue = event.target.value;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (titleInputValue === "") {
      errorText.innerHTML = "You need to provide title";
      return;
    }

    if (descriptionInputValue === "") {
      errorText.innerHTML = "You need to provide description";
      return;
    }

    addTodo({
      title: titleInputValue,
      description: descriptionInputValue,
      done: false,
    });

    errorText.innerHTML = "";

    titleInput.value = "";
    descriptionInput.value = "";

    titleInputValue = "";
    descriptionInputValue = "";

    element.reset();
  };

  const element = render("form", container, "app__form");
  const errorText = render("p", element, "form__error-text");
  const titleInput = Input(element, onTitleChangeHandler, "Title");
  const descriptionInput = Input(
    element,
    onDescriptionChangeHandler,
    "Description"
  );
  const submitButton = Button(element, "+", onSubmitHandler);

  element.addEventListener("submit", (event) => onSubmitHandler(event));

  return {
    element,
    titleInput,
    descriptionInput,
    submitButton,
  };
};

export default Form;

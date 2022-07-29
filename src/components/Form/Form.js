import addEventListener from "../../utilities/domManipulationsFunctions.js/addEventListener";
import render from "../../utilities/domManipulationsFunctions.js/render";
import Input from "../Input/Input";
import { addTodoId, todosStore } from "../../store/todoStore/todosStore";
import Button from "../Button/Button";

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
    todosStore.dispatch({
      type: "todosReducer/ADD_TODO",
      payload: {
        id: addTodoId(),
        title: titleInputValue,
        description: descriptionInputValue,
        done: false,
      },
    });
    titleInput.value = "";
    descriptionInput.value = "";
  };

  const element = render("form", container, "form");
  const titleInput = Input(element, onTitleChangeHandler);
  const descriptionInput = Input(element, onDescriptionChangeHandler);
  const submitButton = Button(element, onSubmitHandler);

  addEventListener(element, "submit", onSubmitHandler);

  return {
    element,
    titleInput,
    descriptionInput,
    submitButton,
  };
};

export default Form;

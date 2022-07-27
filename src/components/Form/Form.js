import addEventListener from "../../utilities/addEventListener";
import render from "../../utilities/render";
import Input from "../Input/Input";
import { todoId, todosStore } from "../../store/todoStore/todosStore";

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
    console.log("submited!");
    event.preventDefault();
    todosStore.dispatch({
      type: "ADD_TODO",
      payload: {
        id: todoId++,
        title: titleInputValue,
        description: descriptionInputValue,
        done: false,
      },
    });
    console.log(todosStore.getState());
    titleInput.value = "";
    descriptionInput.value = "";
  };

  const element = render("form", container, "form");
  const titleInput = Input(element, onTitleChangeHandler);
  const descriptionInput = Input(element, onDescriptionChangeHandler);

  addEventListener(element, "submit", onSubmitHandler);

  return {
    element,
    titleInput,
    descriptionInput,
  };
};

export default Form;

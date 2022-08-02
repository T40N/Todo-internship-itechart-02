import TodosStore from "../../store/todosStore/todosStore";
import BaseComponent from "../BaseComponent/BaseComponent";
import Button from "../Button/Button";
import CustomInput from "../CustomInput/CustomInput";
import "./AddTodoForm.css";
import { addTodoId } from "../../store/todosStore/todosStore";

class AddTodoForm extends BaseComponent {
  constructor(container) {
    super("form", container);
    this.addClassName("app__form");
    this.titleValue = "";
    this.descriptionValue = "";
    this.renderChilds();
    this.addEventListeners();
  }

  renderChilds() {
    this.ErrorText = new BaseComponent("p", this.htmlElement);
    this.ErrorText.addClassName("form__error-text");

    this.TitleInput = new CustomInput(this.htmlElement, "Title");
    this.TitleInput.addClassName("form__title-input");

    this.DescriptionInput = new CustomInput(this.htmlElement, "Description");
    this.DescriptionInput.addClassName("form__description-input");

    this.SubmitButton = new Button(this.htmlElement);
    this.SubmitButton.addClassName("form__submit-button");
    this.SubmitButton.addInnerHTML("+");
  }

  addEventListeners() {
    this.TitleInput.addNewEventListener(
      "input",
      this.titleChangeHandler.bind(this)
    );
    this.DescriptionInput.addNewEventListener(
      "input",
      this.descriptionChangeHandler.bind(this)
    );
    this.SubmitButton.addNewEventListener(
      "click",
      this.submitHandler.bind(this)
    );
  }

  titleChangeHandler(event) {
    this.titleValue = event.target.value;
  }

  descriptionChangeHandler(event) {
    this.descriptionValue = event.target.value;
  }

  submitHandler(event) {
    event.preventDefault();

    if (this.titleValue === "") {
      this.ErrorText.addInnerHTML("You need to provide title");
      return;
    }

    if (this.descriptionValue === "") {
      this.ErrorText.addInnerHTML("You need to provide description");
      return;
    }

    TodosStore.dispatch({
      type: "ADD_TODO",
      payload: {
        id: addTodoId(),
        title: this.titleValue,
        description: this.descriptionValue,
        done: false,
      },
    });

    this.ErrorText.addInnerHTML("");
    this.titleValue = "";
    this.descriptionValue = "";

    this.htmlElement.reset();
  }
}

export default AddTodoForm;

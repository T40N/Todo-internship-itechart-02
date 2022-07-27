import BaseComponent from "../BaseComponent/BaseComponent";
const Button = (container) => {
  const base = BaseComponent("button", container);
  const element = base.create();
  base.mount();
  return element;
};

export default Button;

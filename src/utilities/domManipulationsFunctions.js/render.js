import addClass from "./addClass";
import createElem from "./createElem";
import mountElem from "./mountElem";

const render = (element = "h1", container = undefined, className = "") => {
  const htmlElement = createElem(element);
  mountElem(htmlElement, container);
  addClass(htmlElement, className);
  return htmlElement;
};

export default render;

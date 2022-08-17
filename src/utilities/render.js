const render = (element = "h1", container = undefined, className = "") => {
  const htmlElement = document.createElement(element);
  container.appendChild(htmlElement);
  htmlElement.classList.add(className);
  return htmlElement;
};

export default render;

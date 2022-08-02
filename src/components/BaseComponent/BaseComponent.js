class BaseComponent {
  constructor(htmlElement, container) {
    this.create(htmlElement);
    this.container = container;
    this.mount();
  }

  getHtmlElement() {
    return this.htmlElement;
  }

  getContainer() {
    return this.container;
  }

  create(htmlElement) {
    this.htmlElement = document.createElement(htmlElement);
  }

  mount() {
    this.container.appendChild(this.htmlElement);
  }

  dismount() {
    this.htmlElement.remove();
  }

  appendChild(child) {
    this.htmlElement.appendChild(child);
  }

  addClassName(className) {
    this.htmlElement.classList.add(className);
  }

  removeClassName(className) {
    this.htmlElement.classList.remove(className);
  }

  addInnerHTML(inner) {
    this.htmlElement.innerHTML = inner;
  }

  setAttribute(atribute, value) {
    this.htmlElement.setAttribute(atribute, value);
  }

  addNewEventListener(eventType, eventCallback) {
    this.htmlElement.addEventListener(eventType, (event) => {
      eventCallback(event);
    });
  }
}

export default BaseComponent;

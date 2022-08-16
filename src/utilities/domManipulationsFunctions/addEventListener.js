const addEventListener = (element, eventType, eventCallback) => {
  element.addEventListener(eventType, (event) => eventCallback(event));
};

export default addEventListener;

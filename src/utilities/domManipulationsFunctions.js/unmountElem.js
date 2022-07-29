const unmountElem = (element) => {
  if (element) {
    console.log(element);
    element.remove();
  }
};

export default unmountElem;

import addDragStartListener from "./draggableElementListeners/addDragStartListener";
import addDragEndListener from "./draggableElementListeners/addDragEndListener";
const addDragElemListeners = (elem) => {
  addDragStartListener(elem);
  addDragEndListener(elem);
};

export default addDragElemListeners;

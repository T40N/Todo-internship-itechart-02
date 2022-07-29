import addDragEnterListener from "./targetAreaListeners/addDragEnterListener";
import addDragOverListener from "./targetAreaListeners/addDragOverListener";
import addDragDropListener from "./targetAreaListeners/addDragDropListener";
import addDragLeaveListener from "./targetAreaListeners/addDragLeaveListener";

const addDragTargetListeners = (target) => {
  addDragEnterListener(target);
  addDragOverListener(target);
  addDragDropListener(target);
  addDragLeaveListener(target);
};

export default addDragTargetListeners;

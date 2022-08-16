import addEventListener from "../../domManipulationsFunctions/addEventListener";
import dragenter from "../../dragAndDropFunctions/dragenter";
const addDragEnterListener = (target) => {
  return addEventListener(target, "dragenter", dragenter);
};

export default addDragEnterListener;

import addEventListener from "../../domManipulationsFunctions.js/addEventListener";
import dragenter from "../../dragAndDropFunctions/dragenter";
const addDragEnterListener = (target) => {
  return addEventListener(target, "dragenter", dragenter);
};

export default addDragEnterListener;

import addEventListener from "../../domManipulationsFunctions.js/addEventListener";
import dragover from "../../dragAndDropFunctions/dragover";

const addDragOverListener = (target) => {
  return addEventListener(target, "dragover", dragover);
};

export default addDragOverListener;

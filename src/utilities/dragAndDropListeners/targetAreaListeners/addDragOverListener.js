import addEventListener from "../../domManipulationsFunctions/addEventListener";
import dragover from "../../dragAndDropFunctions/dragover";

const addDragOverListener = (target) => {
  return addEventListener(target, "dragover", dragover);
};

export default addDragOverListener;

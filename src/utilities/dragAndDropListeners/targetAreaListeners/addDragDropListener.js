import addEventListener from "../../domManipulationsFunctions.js/addEventListener";
import dragdrop from "../../dragAndDropFunctions/dragdrop";

const addDragDropListener = (target) => {
  addEventListener(target, "drop", dragdrop);
};

export default addDragDropListener;

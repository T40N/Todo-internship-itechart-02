import addEventListener from "../../domManipulationsFunctions.js/addEventListener";
import dragstart from "../../dragAndDropFunctions/dragstart";

const addDragStartListener = (target) => {
  addEventListener(target, "dragstart", dragstart);
};

export default addDragStartListener;

import addEventListener from "../../domManipulationsFunctions.js/addEventListener";
import dragleave from "../../dragAndDropFunctions/dragleave";

const addDragLeaveListener = (target) => {
  return addEventListener(target, "dragleave", dragleave);
};

export default addDragLeaveListener;

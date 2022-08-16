import addEventListener from "../../domManipulationsFunctions/addEventListener";
import dragend from "../../dragAndDropFunctions/dragend";

const addDragEndListener = (target) => {
  console.log(target);
  addEventListener(target, "dragend", dragend);
};

export default addDragEndListener;

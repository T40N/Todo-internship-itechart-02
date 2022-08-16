import addEventListener from "../domManipulationsFunctions/addEventListener";
import {
  copyKeyPressedHandler,
  copyKeyUnpressedHandler,
} from "../dragAndDropFunctions/copyKeyDetect";

const addCopyOptionListener = () => {
  addEventListener(window, "keydown", copyKeyPressedHandler);
  addEventListener(window, "keyup", copyKeyUnpressedHandler);
};

export default addCopyOptionListener;

export let copyKeyPressed = false;

export const copyKeyPressedHandler = (event) => {
  if (event.key === "c") {
    copyKeyPressed = true;
  }
};

export const copyKeyUnpressedHandler = (event) => {
  if (event.key === "c") {
    copyKeyPressed = false;
  }
};

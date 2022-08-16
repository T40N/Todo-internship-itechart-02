export const setDraggableListeners = (element, { onDragStart, onDragEnd }) => {
  if (onDragStart) {
    element.addEventListener("dragstart", onDragStart);
  }
  if (onDragEnd) {
    element.addEventListener("dragend", onDragEnd);
  }
};

export const setDroppableListeners = (
  element,
  { onDrop, onDragOver, onDragLeave }
) => {
  if (onDrop) {
    element.addEventListener("drop", onDrop);
  }

  if (onDragOver) {
    element.addEventListener("dragover", onDragOver);
  }

  if (onDragLeave) {
    element.addEventListener("dragleave", onDragLeave);
  }
};

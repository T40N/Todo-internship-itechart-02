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
  { onDrop, onDragOver, onDragEnter, onDragLeave }
) => {
  if (onDrop) {
    element.addEventListener("drop", onDrop);
  }

  if (onDragOver) {
    element.addEventListener("dragover", onDragOver);
  }

  if (onDragEnter) {
    element.addEventListener("dragover", onDragEnter);
  }

  if (onDragLeave) {
    element.addEventListener("dragleave", onDragLeave);
  }
};

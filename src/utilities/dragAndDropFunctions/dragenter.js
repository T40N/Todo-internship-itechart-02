export let containerId = "";
const dragenter = (event) => {
  if (event.target.classList.contains("todos")) {
    event.target.classList.add("over");
    containerId = event.target.id;
  }
};

export default dragenter;

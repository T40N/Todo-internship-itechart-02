export let containerId = "";
const dragenter = (event) => {
  event.target.classList.add("over");
  containerId = event.target.id;
};

export default dragenter;

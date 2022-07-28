const dragstart = (event) => {
  event.target.style.opacity = "0.4";
  event.dataTransfer.setData("text/plain", event.target.id);
};

export default dragstart;

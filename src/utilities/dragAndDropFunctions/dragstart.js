const dragstart = (event) => {
  event.target.style.opacity = "0.4";
  console.log(event.target.id);

  event.dataTransfer.setData("text/plain", event.target.id);
};

export default dragstart;

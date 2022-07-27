// const BaseComponent = (
//   element = "h1",
//   container = "body",
//   event = undefined,
//   eventCallback = undefined,
//   innerHtml = ""
// ) => {
//   return {
//     create: () => document.createElement(element),
//     mount: () => (container.innerHTML = element),
//     dismount: () => element.remove(),
//     addEventListener: () =>
//       element.addEventListener(event, (event) => eventCallback(event)),
//     setInnerHtml: () => (element.innerHTML = innerHtml),
//   };
// };

// export default BaseComponent;

const themeSwitchHandler = (state) => {
  if (state === "lightmode") {
    return "darkmode";
  }
  if (state === "darkmode") {
    return "lightmode";
  }
};

const themeReducer = (state = "darkmode", action) => {
  switch (action.type) {
    case "TOGGLE_MODE":
      return themeSwitchHandler(state);
    default:
      return state;
  }
};

export default themeReducer;

const themeSwitchHandler = (state) => {
  console.log(state.mode);
  if (state.mode === "lightmode") {
    return "darkmode";
  }
  if (state.mode === "darkmode") {
    return "lightmode";
  }
};

const themeReducer = (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_MODE":
      return {
        todos: [...state.todos],
        mode: themeSwitchHandler(state),
      };
    default:
      return state;
  }
};

export default themeReducer;

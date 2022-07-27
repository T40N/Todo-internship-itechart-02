const themeReducer = (state, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return;
    case "LIGHT_MODE":
      return;
    default:
      return state;
  }
};

export default themeReducer;

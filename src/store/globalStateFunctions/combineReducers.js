const combineReducers = (...reducers) => {
  return (state, action) => {
    const reducerName = action.type.split("/")[0];
    action.type = action.type.split("/")[1];
    reducers.forEach((reducer) => {
      if (reducer.prototype.constructor.name.includes(reducerName)) {
        state = reducer(state, action);
      }
    });
    return state;
  };
};

export default combineReducers;

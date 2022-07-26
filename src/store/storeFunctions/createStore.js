// createStore function

const createStore = (reducer, initialState) => {
  let state = initialState;
  const listeners = [];

  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const unsubscribe = (listener) => {
    listeners.filter((arrayListener) => arrayListener !== listener);
  };

  return { getState, dispatch, subscribe, unsubscribe };
};

export default createStore;

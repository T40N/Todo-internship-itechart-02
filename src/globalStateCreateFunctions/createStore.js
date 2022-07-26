// createStore function

const createStore = (reducer) => {
  let state;
  const listeners = [];

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

  return { dispatch, subscribe, unsubscribe };
};

export default createStore;

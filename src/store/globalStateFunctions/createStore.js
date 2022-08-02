//Store class using singleton

class Store {
  constructor(reducer, initialState) {
    if (Store.exists) {
      return Store.instance;
    }
    this.state = initialState;
    this.listeners = [];
    this.reducer = reducer;
    Store.exists = true;
    Store.instance = this;
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  unsubscribe(listener) {
    this.listeners.filter((arrayListener) => {
      arrayListener !== listener;
    });
  }
}

export default Store;

import { createStore } from "vuex";

export default createStore({
  state: {
    totalBalance: 0,
    operations: [
      {
        id: 1,
        type: "Income",
        value: 100,
        comment: "Some Income Comment",
      },
      {
        id: 2,
        type: "Outcome",
        value: 50,
        comment: "Some Outcome Comment",
      },
    ],
  },
  getters: {
    getTotalBalance(state) {
      let balance = 0;
      state.operations.forEach((operation) => {
        if (operation.type == "Income") {
          balance += operation.value;
        } else {
          balance -= operation.value;
        }
      });
      return balance;
    },
  },
  mutations: {
    deleteItem(state, id) {
      state.operations = state.operations.filter(
        (operation) => operation.id !== id
      );
    },
    addItem(state, operation) {
      state.operations.push(operation);
    },
  },
  actions: {
    addItem({ commit }, operation) {
      commit("addItem", operation);
    },
  },
  modules: {},
});

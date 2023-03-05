import { useToast } from "vue-toastification";
import api from "@/services/api";
import router from "@/router";

const toast = useToast();

export default {
  state: {
    cartItems: [],
  },
  getters: {
    getCartItems: (state) => state.cartItems,
  },
  actions: {
    addToCart({ commit, state }, product) {
      const cartItem = state.cartItems.find((item) => item.id === product.id);
      if (cartItem) {
        commit("incrementItemQuantity", cartItem.id);
      } else {
        commit("addItemToCart", product);
      }
    },
    incrementItemQuantity({ commit }, cartItem) {
      commit("incrementItemQuantity", cartItem);
    },
    decrementItemQuantity({ commit }, cartItem) {
      if (cartItem.amount > 1) {
        commit("decrementItemQuantity", cartItem.id);
      } else {
        commit("removeItemFromCart", cartItem);
      }
    },
    removeItemFromCart({ commit }, cartItem) {
      commit("removeItemFromCart", cartItem);
    },
    clearCart({ commit }) {
      commit("clearCart");
    },
    async placeOrder({ state, commit }) {
      const orderData = state.cartItems.map((product) => {
        return {
          id: product.id,
          amount: product.amount,
        };
      });

      try {
        const response = await api.post("/order", orderData);
        toast.success(response.data?.message);
        commit("clearCart");
        router.push({ path: "/" });
      } catch (error) {
        toast.error(error.response?.data?.message);
      }
    },
  },
  mutations: {
    addItemToCart: (state, product) =>
      state.cartItems.push({ ...product, amount: 1 }),
    incrementItemQuantity: (state, cartItem) => {
      state.cartItems.find((item) => item.id === cartItem).amount += 1;
    },
    decrementItemQuantity: (state, cartItem) => {
      const data = state.cartItems.find((item) => item.id === cartItem);
      if (data.amount !== 1) {
        data.amount -= 1;
      }
    },
    removeItemFromCart: (state, cartItem) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === cartItem.id
      );
      state.cartItems.splice(index, 1);
    },
    clearCart: (state) => (state.cartItems = []),
  },
  namespaced: true,
};

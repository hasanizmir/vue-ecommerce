import api from "@/services/api";

export default {
  state: {
    products: [],
  },
  getters: {
    getProducts: (state) => state.products,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchProducts({ state, commit }) {
      if (state.products?.length > 0) return;

      const products = await api.get("/listing");
      commit("setProducts", products.data);
    },
  },
  namespaced: true,
};

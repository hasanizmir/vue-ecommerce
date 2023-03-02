import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductList.vue";
import CartView from "../views/CartView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: () => {
      return { path: "/product-list" };
    },
  },
  {
    path: "/product-list",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { shallowMount } from "@vue/test-utils";
import store from "@/store";
import router from "@/router";

import ProductListItem from "@/components/ProductListItem.vue";

describe("ProductListItem.vue", () => {
  let wrapper = shallowMount(ProductListItem, {
    global: {
      mocks: {
        $store: store,
        $router: router,
      },
    },
    props: {
      item: [
        {
          "id": 1,
          "name": "Şampuan",
          "price": "13",
          "currency": "TRY",
          "image":
            "https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321",
        },
      ],
    },
  });

  it("Update store when click add to cart button", async () => {
    expect(store.state.cart.cartItems.length).toBe(0);

    await wrapper.find("button").trigger("click");

    expect(store.state.cart.cartItems.length).toBe(1);
  });
  it("Redirect when product added to cart", async () => {
    await wrapper.find("button").trigger("click");

    expect(router.currentRoute._value.fullPath).toBe("/cart");
  });
});

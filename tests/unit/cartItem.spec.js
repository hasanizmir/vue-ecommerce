import { shallowMount } from "@vue/test-utils";
import store from "@/store";

import CartItem from "@/components/CartItem.vue";

const product = {
  id: 1,
  name: "Şampuan",
  price: "13",
  currency: "TRY",
  image:
    "https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321",
};

describe("CartItem.vue", () => {
  let wrapper = shallowMount(CartItem, {
    global: {
      mocks: {
        $store: store,
      },
    },
    props: {
      data: [
        {
          id: 1,
          name: "Şampuan",
          price: "13",
          currency: "TRY",
          image:
            "https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321",
        },
      ],
    },
  });

  it("Update store when click remove button", async () => {
    store.dispatch("cart/addToCart", product);
    expect(store.state.cart.cartItems.length).toBe(1);

    await wrapper.find("span").trigger("click");

    expect(store.state.cart.cartItems.length).toBe(0);
  });
});

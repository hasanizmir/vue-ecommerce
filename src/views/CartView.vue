<template>
  <div class="cart">
    <h3 v-if="cartItems.length > 0" class="cart__title">MY CART ({{ cartItems.length }})</h3>
    <div class="cart__item">
      <CartItem v-for="item in cartItems" :key="item.id" :data="item" />
    </div>
    <div v-if="!cartItems.length">
      <h2 class="cart__empty">Cart is empty</h2>
    </div>
    <div class="cart__buttons">
      <button @click="continueShopping">Continue Shopping</button>
      <button v-if="cartItems.length > 0" @click="placeOrder">Place Order</button> 
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CartItem from "@/components/CartItem.vue";

export default {
  name: "CartView",
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters({
      cartItems: 'cart/getCartItems',
    }),
  },
  methods: {
    ...mapActions({
      placeOrder: 'cart/placeOrder',
    }),
    continueShopping() {
      this.$router.push({ name: "ProductList" });
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  max-width: calc(var(--container) / 2);
  margin: var(--padding-lg) auto;
  border: 1px solid var(--border-color);

  &__title {
    padding: var(--padding-md);
    text-align: left;
    font-weight: var(--font-weight-semibold);
    color: var(--color-link);
  }

  &__item {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: var(--padding-md);
  }

  &__empty {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--border-color);
  }

  &__buttons {
    display: flex;
    justify-content: center;
    gap: var(--space-md);
    padding: var(--padding-md);
    box-shadow: 0 -5px 10px -5px #dddcdc;

    :nth-child(1) {
      background-color: var(--color-white);
      color: var(--color-link);
      border: 1px solid #ccc;
    }

    button {
      min-width: 150px;
      height: 40px;
      background-color: var(--color-primary);
      padding: 0 var(--padding-lg);
      border-radius: 2px;
      color: var(--color-white);
      transition: background-color 0.3s ease-in;
      text-transform: uppercase;
      cursor: pointer;

      &:nth-child(2) {
        &:hover {
          background-color: transparent;
          border: 2px solid var(--color-primary);
          color: var(--color-primary);
        }
      }
    }
  }
}
</style>

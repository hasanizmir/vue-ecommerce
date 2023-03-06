<template>
  <div class="product">
    <img :src="item.image" alt="product" width="150" />
    <p>{{ item.name }}</p>
    <div class="product__body">
      <span>{{ item.price }} {{ item.currency }}</span>
      <button class="product__button" @click="addToCart()">ADD BASKET</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart', this.item)
      this.$router.push({ path: "/cart" });
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--border-color);
  padding: var(--padding-md);

  @media screen and (min-width: 460px) {
    width: calc(100% / 2);

    &:nth-child(2n) {
      border-left: 0;
    }
  }

  img,
  p {
    padding-bottom: var(--padding-md);
  }

  &__body {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__button {
    background-color: var(--color-primary);
    color: var(--color-white);
    font-weight: var(--font-weight-semibold);
    padding: var(--padding-sm) var(--padding-lg);
    border: 2px solid var(--color-primary);
    border-radius: var(--padding-xs);
    transition: background-color 0.3s ease-in;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      border: 2px solid var(--color-primary);
      color: var(--color-primary);
    }
  }
}
</style>

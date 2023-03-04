<template>
  <div class="cart-item">
    <div class="cart-item__detail">
      <img :src="data.image" :alt="data.name" width="150" height="150" />
      <div class="cart-item__content">
        <div class="cart-item__name">{{ data.name }}</div>
        <div class="cart-item__price">
          {{ data.price + " " + data.currency }}
        </div>
      </div>
    </div>
    <div class="cart-item__footer">
      <div class="cart-item__qty">
        <button class="cart-item__button">-</button>
        <input class="cart-item__input" value="1"/>
        <button class="cart-item__button">+</button>
      </div>
      <span class="cart-item__remove">REMOVE</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  border: 1px solid var(--border-color);
  padding: var(--padding-md);

  &__detail {
    display: flex;
  }

  &__content {
    display: flex;
    gap: var(--space-xl);
    margin: var(--space-xs) var(--space-sm);
    flex-direction: column;
  }

  &__name {
    color: var(--color-font);
  }

  &__price {
    font-weight: var(--font-weight-semibold);
    color: var(--color-black);
  }

  &__footer {
    display: flex;
    margin-top: var(--space-sm);
    justify-content: space-between;
  }

  &__qty {
    width: 150px;
    display: flex;
    justify-content: space-evenly;
  }

  &__button {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-white);
    border: 1px solid #ccc;
    border-radius: 100%;
    cursor: pointer;
  }

  &__input {
    width: 50px;
    text-align: center;
    border: 1px solid #ccc;
  }

  &__remove {
    color: var(--color-black);
    font-weight: var(--font-weight-semibold);
    margin-right: var(--space-3xl);
    cursor: pointer;
  }
}
</style>

<template>
  <div class="cart-item">
    <div class="cart-item__detail">
      <img :src="data.image" :alt="data.name" width="100" height="100" />
      <div class="cart-item__content">
        <div class="cart-item__name">{{ data.name }}</div>
        <div class="cart-item__price">
          {{ (data.price * amount).toFixed(2) + " " + data.currency }}
        </div>
      </div>
    </div>
    <div class="cart-item__footer">
      <div class="cart-item__qty">
        <button
          class="cart-item__button"
          @click="decrease(data)"
          :disabled="amount === 1"
        >
          -
        </button>
        <input class="cart-item__input" v-model="amount" />
        <button class="cart-item__button" @click="increase(data.id)">+</button>
      </div>
      <span class="cart-item__remove"  @click="removeFromCart()">REMOVE</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "CartItem",
  data() {
    return {
      amount: 1,
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      incrementItem: 'cart/incrementItemQuantity',
      decrementItem: 'cart/decrementItemQuantity',
      removeItem: 'cart/removeItem',
    }),
    increase() {
      this.amount += 1;
      this.incrementItem(this.data.id);
    },
    decrease() {
      this.amount -= 1;
      this.decrementItem(this.data);
    },
  },
  created() {
    this.amount = this.data.amount;
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
    margin: var(--space-xs) var(--space-md);
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
    width: 100px;
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
    width: 30px;
    text-align: center;
    border: 1px solid #ccc;
  }

  &__remove {
    color: var(--color-black);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    margin-right: 30%;
    cursor: pointer;
  }
}
</style>

<template>
  <div class="products">
    <div v-if="!products.length">
      <img src="../assets/loader.svg" />
      <p>Loading...</p>
    </div>
    <ProductListItem v-for="item in products" :key="item.id" :item="item" />
  </div>
</template>

<script>
import ProductListItem from "@/components/ProductListItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "ProductList",
  components: {
    ProductListItem,
  },
  computed: {
    ...mapGetters({
      products: "products/getProducts",
    }),
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.$store.dispatch("products/fetchProducts");
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: calc(var(--container) / 2);
  margin: 0 auto;
  padding: var(--padding-lg);
}
</style>

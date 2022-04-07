<template>
  <Header />
  <Product />
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Product from "./components/Product.vue";
export default {
  components: {
    Header,
    Product,
  },
};
</script>

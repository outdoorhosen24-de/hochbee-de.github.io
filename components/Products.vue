<template>
  <div class="row display-flex">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-5 fadeInUp"
    >
      <ProductItem-v2 :product="product" />
    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  props: {
    products: Array,
  }
};
</script>
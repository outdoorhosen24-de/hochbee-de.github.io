<template>
  <div>
    <div class="container-fluid py-5">
      <div class="container-fluid">
        <div class="row g-5">
          <div class="col-lg-2 col-md-3 fadeInUp">
            <CategorySidebar />
            <Filters
              :products="products"
              v-on:selected="handleFilterSelection"
            ></Filters>
          </div>

          <div class="col-lg-10 col-md-9 fadeInUp">
            <Products
              :products="products.slice((page - 1) * 12, page * 12)"
              :page="page"
            />
            <Pagination
              class="mt-5 d-flex justify-content-center text-center"
              :data="products"
              :per-page="12"
              :records="products.length"
              v-model="page"
            ></Pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "~/assets/data/products.json";
import config from "~/assets/data/config.json";
import Pagination from "vue-pagination-2";

export default {
  name: "categoryComponent",
  head() {
    return {
      title: config.seo?.shop?.title || config.seo.mainKeyword + " Shop",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            config.seo?.shop?.metaDescription ||
            config.seo.mainKeyword + " Shop",
        },
        {
          hid: "robots",
          name: "robots",
          content: config.seo?.shop?.robots || "noindex, follow",
        },
      ],
    };
  },
  components: {
    Pagination,
  },
  data() {
    return {
      products: products,
      page: 1,
    };
  },
  methods: {
    handleFilterSelection(item) {
      this.products = item;
    },
  },
};
</script>

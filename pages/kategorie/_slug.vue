<template>
  <div>
    <div class="container-fluid py-5">
      <div class="container-fluid">
        <div class="row g-5">
          <div class="col-lg-2 fadeInUp">
            <CategorySidebar />
            <Filters :products="products" v-on:selected="handleFilterSelection"></Filters>
          </div>
          <div class="col-lg-10 fadeInUp">
            <div class="text-center fadeInUp">
              <div class="section-title bg-white text-center text-primary px-3 h6" >
                Kategorie
              </div>
              <h1 class="mb-5 h2">
                {{ categoryData.name }}
              </h1>
            </div>
            <Products :products="products.slice((page - 1) * 12, page * 12)" :page="page"/>
            <Pagination class="mt-5 d-flex justify-content-center text-center" :data="products" :per-page="12" :records="products.length" v-model="page"></Pagination>          </div>
        </div>
      </div>
    </div>
    <!-- because the seoData object differs from the main pages ones, we have to parse the seoData.seo object to get the seo data for this category. -->
    <SeoText :seoData="seoData.seo" v-if="seoData && seoData.seo" />
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
import db from "~/utils/database.js";
import Pagination from 'vue-pagination-2';

export default {
  name: "categoryComponent",
  head() {
    return {
      title:
        this.seoData?.seo?.title || config.categorySeo.defaultTitle
              .replaceAll("$PRODUKT", this.categoryData.name)
              .replaceAll("$HERSTELLER", this.categoryData.brand)
              .replaceAll("$KATEGORIE", this.categoryData.name),
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            this.seoData?.seo?.metaDescription || config.categorySeo.defaultMetaDescription
                  .replaceAll("$PRODUKT", this.categoryData.name)
                  .replaceAll("$HERSTELLER", this.categoryData.brand)
                  .replaceAll("$KATEGORIE", this.categoryData.name),
        },
        {
          hid: "robots",
          name: "robots",
          content:
            this.seoData?.seo?.robots || config.categorySeo.defaultRobots,
        },
      ],
    };
  },
  components: {
    Pagination
  },
  data() {
    const slug = this.$route.params.slug;
    const categoryData = db.categories.getCategoryFromSlug(slug);
    const filteredProducts = db.products
      .getProductsFromCategory(categoryData)
      .slice(0, config.numberMaximumProductsPerCategory);
    const seoData = db.seo.getSeoForCategoryFromSlug(slug);
    return {
      products: filteredProducts,
      categoryData,
      seoData,
      page: 1,
    };
  },
  methods: {
    handleFilterSelection(item) {
      this.products = item;
    }
  }
};
</script>

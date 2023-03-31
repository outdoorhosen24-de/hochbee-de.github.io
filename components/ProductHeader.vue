<template>
  <div>
    <!-- About Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6 fadeInUp" style="min-height: 400px">
            <div class="position-relative h-100">
              <div
                id="headerCarousel"
                class="carousel slide h-100"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner h-100">
                  <div
                    v-for="(image, index) in product.localThumbs"
                    :key="index"
                    :class="{
                      'carousel-item': true,
                      active: index === 0,
                      'h-100': true,
                    }"
                  >
                    <nuxt-img
                      class="img-fluid position-absolute w-100 h-100"
                      :src="`${config.imageFolder}${image}`"
                      :alt="product.name"
                      style="object-fit: cover; object-position: center bottom"
                      preset="productHeader"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#headerCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#headerCarousel"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-6 fadeInUp">
            <div class="section-title bg-white text-start text-primary pe-3 h6">
              {{ product.category }}
            </div>
            <h1 class="mb-4">{{ product.name }}</h1>
            <p class="mb-4">
              Die {{ product.name }} ist eine
              {{
                product.categories[this.product.categories.length - 2].slice(
                  0,
                  -1
                )
              }}
              von der Marke {{ decode(product.brand) }}. Sie ist für einen Preis
              von {{ product.price }} EUR verfügbar und ist sofort lieferbar.
              Die {{ decode(product.name) }} hat eine Gesamtbewertung von
              {{ product.stars }}/5.
            </p>
            <p class="mb-4">
              Das Produkt <strong>{{ product.name }}</strong> bestand folgende
              Testkriterien:
            </p>
            <Checklist />
            <a class="btn btn-primary py-3 px-5 mt-2" href="#testbericht"
              >Zum Testbericht</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
var he = require("he");

export default {
  name: "productheader",
  props: {
    product: Object,
  },
  data() {
    return {
      config,
    };
  },
  methods: {
    decode: function decodeEntity(str) {
      return he.decode(str);
    },
  },
};
</script>

<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.5);
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.carousel-control-prev-icon:hover,
.carousel-control-next-icon:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>

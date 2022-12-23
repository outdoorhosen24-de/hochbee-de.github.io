<template>
  <div>
    <!-- About Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6 fadeInUp" style="min-height: 400px">
            <div class="position-relative h-100">
              <div>
                <b-carousel
                  id="carousel-1"
                  controls
                  indicators
                  no-animation
                  background="#fff"
                  img-width="1024"
                  img-height="480"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide
                    v-for="(item, index) in product.localThumbs"
                    :key="index"
                    :img-src="'/assets/images/images/' + item"
                  ></b-carousel-slide>
                </b-carousel>
              </div>
            </div>
          </div>
          <div class="col-lg-6 fadeInUp">
            <div class="section-title bg-white text-start text-primary pe-3 h6">
              {{ product.category }}
            </div>
            <h1 class="mb-4">{{ product.name }}</h1>
            <p class="mb-4">
              Die {{ product.name }} ist ein Produkt aus der Kategorie
              {{ decode(product.category) }}
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
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    decode: function decodeEntity(str) {
      return he.decode(str);
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
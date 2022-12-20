<template>
  <div id="filters">
    <div class="widget mt-5">
      <h6 class="widgettitle">
        <span class="text">Sort by</span>
      </h6>
      <div class="widget-content">
        <ul class="filter-order-by">
          <li
            v-for="(item, index) in items"
            :key="index"
            :class="{ selected: item.isSelected }"
          >
            <a @click="handleClick(item)">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="range-slider">
      <input
        type="range"
        min="0"
        :max="maxPrice"
        step="1"
        v-model="sliderMin"
      />
      <input
        type="range"
        min="0"
        :max="maxPrice"
        step="1"
        v-model="sliderMax"
      />
    </div>
    <div class="price_label mt-2 text-center">
      Price: <span class="from">{{ sliderMin }}€</span> —
      <span class="to">{{ sliderMax }}€</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  props: {
    // Array of items to display in the filter
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      localProducts: [...this.products],
      filteredProducts: [],
      minAngle: 0,
      maxAngle: Math.max(...this.products.map((product) => product.price)) + 1,
      maxPrice: Math.max(...this.products.map((product) => product.price)) + 1,
      items: [
        {
          id: 1,
          name: "Sort by price: low to high",
          isSelected: true,
          value: "ascending",
        },
        {
          id: 2,
          name: "Sort by price: high to low",
          isSelected: false,
          value: "descending",
        },
      ],
    };
  },
  methods: {
    // Method to handle clicks on filter items
    handleClick(item) {
      // Unselect all items
      this.items.forEach((i) => (i.isSelected = false));

      // Select the clicked item
      item.isSelected = true;

      // Sort the products based on the selected filter
      if (item.value === "ascending") {
        this.localProducts.sort((a, b) => a.price - b.price);
      } else if (item.value === "descending") {
        this.localProducts.sort((a, b) => b.price - a.price);
      }

      // Emit an event to notify the parent component
      this.$emit("selected", this.localProducts);
    },
  },
  computed: {
    sliderMin: {
      get: function () {
        return parseInt(this.minAngle);
      },
      set: function (val) {
        val = parseInt(val);
        if (val > this.maxAngle) {
          this.maxAngle = val;
        }
        this.minAngle = val;

        this.filteredProducts = this.localProducts.filter((product) => {
          return (
            Number(product.price) >= this.minAngle &&
            Number(product.price) <= this.maxAngle
          );
        });

        // Emit an event to notify the parent component
        this.$emit("selected", this.filteredProducts);
      },
    },
    sliderMax: {
      get: function () {
        return parseInt(this.maxAngle);
      },
      set: function (val) {
        val = parseInt(val);
        if (val < this.minAngle) {
          this.minAngle = val;
        }
        this.maxAngle = val;

        this.filteredProducts = this.localProducts.filter((product) => {
          return (
            Number(product.price) >= this.minAngle &&
            Number(product.price) <= this.maxAngle
          );
        });

        // Emit an event to notify the parent component
        this.$emit("selected", this.filteredProducts);
      },
    },
  },
};
</script>

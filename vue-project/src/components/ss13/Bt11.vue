<template>
  <v-app>
    <v-container class="pa-4">
      <v-row>
        <v-col cols="3">
          <v-card class="pa-4">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>Gender</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-radio-group v-model="filters.gender">
                    <v-radio label="All" value="all"></v-radio>
                    <v-radio label="Men" value="men"></v-radio>
                    <v-radio label="Women" value="women"></v-radio>
                  </v-radio-group>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>Categories</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox v-model="filters.categories.kitchen" label="Kitchen"></v-checkbox>
                  <v-checkbox v-model="filters.categories.electronics" label="Electronics"></v-checkbox>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>Colors</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox v-model="filters.colors.orange" label="Orange"></v-checkbox>
                  <v-checkbox v-model="filters.colors.red" label="Red"></v-checkbox>
                  <v-checkbox v-model="filters.colors.blue" label="Blue"></v-checkbox>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>Price</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-radio-group v-model="filters.price">
                    <v-radio label="$10 - $50" value="10-50"></v-radio>
                    <v-radio label="$50 - $100" value="50-100"></v-radio>
                    <v-radio label="$100 - $150" value="100-150"></v-radio>
                    <v-radio label="Over $200" value="over-200"></v-radio>
                  </v-radio-group>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-btn class="mt-3" @click="resetFilters">Reset Filters</v-btn>
            </v-expansion-panels>
          </v-card>
        </v-col>

        <v-col cols="9">
          <v-container class="pa-4">
            <v-row>
              <v-col v-for="product in filteredProducts" :key="product.id" cols="12" md="4">
                <v-card>
                  <v-img :src="product.image" height="200px"></v-img>
                  <v-card-title>{{ product.name }}</v-card-title>
                  <v-card-subtitle>
                    <span v-if="product.discountPrice"><s>${{ product.originalPrice }}</s> ${{ product.discountPrice }}</span>
                    <span v-else>${{ product.originalPrice }}</span>
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-rating :value="product.rating" readonly></v-rating>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue';

const filters = ref({
  gender: 'all',
  categories: {
    kitchen: false,
    electronics: false,
  },
  colors: {
    orange: false,
    red: false,
    blue: false,
  },
  price: null,
});

const products = ref([
  { id: 1, name: 'MacBook Air Pro', image: 'https://i.pinimg.com/originals/18/ab/8c/18ab8cc2391f4cc0d2abc49b36df881a.jpg', originalPrice: 15, discountPrice: null, rating: 4 },
  { id: 2, name: 'Red Velvet Dress', image: 'https://i.pinimg.com/originals/18/ab/8c/18ab8cc2391f4cc0d2abc49b36df881a.jpg', originalPrice: 16, discountPrice: 14.59, rating: 5 },
  { id: 3, name: 'Boat Headphone', image: 'https://i.pinimg.com/originals/18/ab/8c/18ab8cc2391f4cc0d2abc49b36df881a.jpg', originalPrice: 36, discountPrice: 29, rating: 4 },
  { id: 4, name: 'The Psychology of Money', image: 'https://i.pinimg.com/originals/18/ab/8c/18ab8cc2391f4cc0d2abc49b36df881a.jpg', originalPrice: 85, discountPrice: 49.99, rating: 4.5 },
  { id: 5, name: 'Psalms Book for Growth', image: 'https://i.pinimg.com/originals/18/ab/8c/18ab8cc2391f4cc0d2abc49b36df881a.jpg', originalPrice: 89, discountPrice: null, rating: 5 },
  { id: 6, name: 'Gaming Console', image: 'https://i.pinimg.com/originals/18/ab/8c/18ab8cc2391f4cc0d2abc49b36df881a.jpg', originalPrice: 99, discountPrice: null, rating: 4 },
]);
const filteredProducts = computed(() => {
  return products.value;
});

function resetFilters() {
  filters.value.gender = 'all';
  filters.value.categories.kitchen = false;
  filters.value.categories.electronics = false;
  filters.value.colors.orange = false;
  filters.value.colors.red = false;
  filters.value.colors.blue = false;
  filters.value.price = null;
}
</script>

<style scoped>
</style>

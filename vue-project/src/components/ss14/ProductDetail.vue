<template>
  <v-container class="pa-4">
    <v-row>
      <v-col cols="6">
        <v-carousel show-arrows>
          <v-carousel-item v-for="image in product.images" :key="image">
            <v-img :src="image"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="6">
        <h2>{{ product.name }}</h2>
        <div><s>${{ product.oldPrice }}</s> ${{ product.newPrice }}</div>
        <div class="mt-4">
          <label>Choose Color:</label>
          <v-radio-group v-model="selectedColor.value" row>
            <v-radio v-for="color in product.colors" :key="color" :label="color" :value="color"></v-radio>
          </v-radio-group>
        </div>
        <div class="mt-4">
          <label>Quantity:</label>
          <v-btn icon @click="decreaseQuantity">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <span>{{ quantity.value }}</span>
          <v-btn icon @click="increaseQuantity">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
        <v-btn class="mt-4" @click="addToCart">Add to Cart</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const product = ref({
  name: 'Cute Soft Teddybear',
  oldPrice: 175,
  newPrice: 200,
  colors: ['Orange', 'Blue', 'Pink'],
  images: ['https://i.pinimg.com/originals/8c/52/c7/8c52c70eee9b7c2960c4f9914bffdb07.png', 'https://i.pinimg.com/originals/93/f0/82/93f082aa7b621979ebc82d79cff26359.jpg'],
});

const selectedColor = ref('Orange');
const quantity = ref(1);

function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}

function increaseQuantity() {
  quantity.value++;
}

function addToCart() {
  alert(`Added ${product.value.name} to cart with ${quantity.value} quantity and color ${selectedColor.value}`);
}
</script>

<style scoped>
.product-image {
  width: 100%;
}
</style>

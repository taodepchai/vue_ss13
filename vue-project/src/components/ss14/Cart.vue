<template>
  <v-card class="pa-4">
    <v-row no-gutters>
      <v-col cols="4">
        <v-img :src="item.image" class="product-image"></v-img>
      </v-col>
      <v-col cols="4">
        <div class="product-name">{{ item.name }}</div>
        <div class="product-price">${{ item.price }}</div>
      </v-col>
      <v-col cols="4">
        <v-btn icon @click="decreaseQuantity">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <span>{{ item.quantity }}</span>
        <v-btn icon @click="increaseQuantity">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-divider class="my-3"></v-divider>
    <v-row>
      <v-col>
        <div>Subtotal: ${{ subtotal }}</div>
        <div>Discount: -${{ discount }}</div>
        <div><strong>Total: ${{ total }}</strong></div>
      </v-col>
    </v-row>
    <v-btn class="mt-4" @click="checkout">Checkout</v-btn>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue';

const item = ref({
  name: 'Cute Soft Teddybear',
  price: 200,
  image: 'https://i.pinimg.com/originals/8c/52/c7/8c52c70eee9b7c2960c4f9914bffdb07.png',
  quantity: 1,
});

const discount = ref(10);
const subtotal = ref(item.value.price);

const total = computed(() => {
  return subtotal.value - discount.value;
});

function decreaseQuantity() {
  if (item.value.quantity > 1) {
    item.value.quantity--;
  }
}

function increaseQuantity() {
  item.value.quantity++;
}

function checkout() {
  alert('Proceeding to checkout!');
}
</script>

<style scoped>
.product-image {
  width: 100px;
}
</style>

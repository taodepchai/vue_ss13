<template>
  <v-container>
    <v-card>
      <v-card-title class="pa-4">
        Product List
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="addItem">Add New Item</v-btn>
      </v-card-title>
      <v-card-text class="pa-4">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="search.value"
              label="Search"
              append-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-data-table
          :headers="headers.value"
          :items="products"
          :search="search.value"
          :items-per-page="itemsPerPage.value"
          hide-default-footer
        >
          <template v-slot:[`item.productImage`]="{ item }">
            <v-img
              :src="item.productImage"
              height="50"
              width="50"
              contain
            ></v-img>
          </template>
          <template v-slot:[`item.status`]="{ item }">
            <v-chip :color="item.status === 'Instock' ? 'green' : 'red'" small>
              {{ item.status }}
            </v-chip>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn icon small @click="editItem(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon small @click="deleteItem(item)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <v-pagination
          v-model="currentPage.value"
          :length="totalPages"
        ></v-pagination>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { reactive, ref } from "vue";

const search = ref("");
const currentPage = ref(1);
const itemsPerPage = ref(5);

const headers = ref([
  { text: "", value: "data-table-select", sortable: false },
  { text: "Product Image", value: "productImage", sortable: false },
  { text: "Product", value: "product" },
  { text: "Date", value: "date" },
  { text: "Status", value: "status" },
  { text: "Price", value: "price", align: "end" },
  { text: "Actions", value: "actions", sortable: false, align: "end" },
]);

const products = reactive([
  {
    productImage: "https://i.pinimg.com/originals/6c/99/51/6c9951b183a0c9df5335ec95aa843970.png",
    product: "Curology Face Wash",
    category: "Beauty",
    date: "Thu, Jan 12 2023",
    status: "Instock",
    price: "$275",
  },
  {
    productImage: "https://i.pinimg.com/originals/6c/99/51/6c9951b183a0c9df5335ec95aa843970.png",
    product: "Body Lotion",
    category: "Beauty",
    date: "Thu, Jan 20 2023",
    status: "Out of Stock",
    price: "$89",
  },
  {
    productImage: "https://i.pinimg.com/originals/6c/99/51/6c9951b183a0c9df5335ec95aa843970.png",
    product: "Smart Watch",
    category: "Electronics",
    date: "Fri, Feb 15 2024",
    status: "Instock",
    price: "$125",
  },
  {
    productImage: "https://i.pinimg.com/originals/6c/99/51/6c9951b183a0c9df5335ec95aa843970.png",
    product: "Camera",
    category: "Electronics",
    date: "Fri, March 30 2024",
    status: "Instock",
    price: "$200",
  },
  {
    productImage: "https://i.pinimg.com/originals/6c/99/51/6c9951b183a0c9df5335ec95aa843970.png",
    product: "Games",
    category: "Electronics",
    date: "Sat, March 30 2024",
    status: "Out of Stock",
    price: "$100",
  },
]);
console.log(products);

const addItem = () => {};

const editItem = (item) => {};

const deleteItem = (item) => {};
</script>

<style scoped></style>

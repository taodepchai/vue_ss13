<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Basic Layout</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Name" v-model="name"></v-text-field>
              <v-text-field label="Company" v-model="company"></v-text-field>
              <v-text-field label="Email" v-model="email"></v-text-field>
              <v-text-field label="Phone No" v-model="phone"></v-text-field>
              <v-textarea label="Message" v-model="message"></v-textarea>
              <v-btn color="primary" @click="submitForm">Send</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Basic with Icons</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Name"
                v-model="name"
                prepend-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                label="Company"
                v-model="company"
                prepend-icon="mdi-office-building"
              ></v-text-field>
              <v-text-field
                label="Email"
                v-model="email"
                prepend-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                label="Phone No"
                v-model="phone"
                prepend-icon="mdi-phone"
              ></v-text-field>
              <v-textarea
                label="Message"
                v-model="message"
                prepend-icon="mdi-message"
              ></v-textarea>
              <v-btn color="primary" @click="submitForm">Send</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const company = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

const submitForm = () => {
  console.log({
    name: name.value,
    company: company.value,
    email: email.value,
    phone: phone.value,
    message: message.value
  })
}
</script>

<style scoped>
.v-card-title {
  font-weight: bold;
}
</style>

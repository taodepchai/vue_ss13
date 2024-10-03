import "./assets/main.css";

import { createApp } from "vue";
import { createVuetify } from "vuetify/lib/framework.mjs";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css"; 
import App from "./App.vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi", 
  },
});
createApp(App).use(vuetify).mount("#app");
    
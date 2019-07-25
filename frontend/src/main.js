import Vue from "vue";
import App from "./App.vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
Vue.config.productionTip = false;
Vue.config.devtools = true;

// Import all locales
import locale_en from "./i18n/en.json";
import locale_nl from "./i18n/nl.json";
import locale_es from "./i18n/es.json";

import Bridge from "./wailsbridge";

Bridge.Start(() => {
  window.backend.Backend.GetLocale().then(result => {
    
    const i18n = new VueI18n({
      locale: result, // set locale
      messages : {
        en: locale_en,
        nl: locale_nl,
        es: locale_es,
      },
    });

    new Vue({
      i18n,
      render: h => h(App)
    }).$mount("#app");
  });
});

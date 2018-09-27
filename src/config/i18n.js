import Vue from 'vue';
import VueI18n from 'vue-i18n';

// Usamos el plugin
Vue.use(VueI18n);
import messages from '@/translations';

export default new VueI18n({
  locale: 'es',
  messages: messages
})

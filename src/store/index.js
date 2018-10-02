import Vue from 'vue';
import Vuex from 'vuex';

// Utilizamos el plugin
Vue.use(Vuex);

import authModule from '@/modules/auth'

export default new Vuex.Store({
  state: {
    processing: false,
    loaded: false,
    alert: {
      type: 'success',
      show: false,
      message: ''
    }
  },
  mutations: {
    setLoaded: (state, loaded) => {
      state.loaded = loaded;
    },
    setAlertMessage: (state, data) => {
      state.alert.type = data.type;
      state.alert.show = data.show;
      state.alert.alert.message = data.message;
      // Tras cierto tiempo se reestablecen los valores
      setTimeout(()=> {
        state.alert.type = 'sucess';
        state.alert.show = false;
        state.alert.alert.message = '';
      }, data.timeout)

    }
  },
  modules: {
      authModule
  }
})

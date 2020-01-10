import Vue from 'vue';
import Vuex from 'vuex';
import WebposToolkit from 'webpos-toolkit';
import VModal from 'vue-js-modal';
// import Loading from '@/plugins/loading';
import i18n from '@/plugins/i18n';
import store from '@/store';
import App from './App';
import router from './router';

const isProduction = process.env.NODE_ENV === 'production';

Vue.config.silent = isProduction;
Vue.config.productionTip = !isProduction;
Vue.config.devtools = !isProduction;

Vue.use(Vuex);
Vue.use(WebposToolkit);
// Vue.use(Loading);
Vue.use(VModal, { dynamic: true });

// Disable Mouse Right Click
document.oncontextmenu = () => false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store: new Vuex.Store(store),
  components: { App },
  template: '<App/>',
});

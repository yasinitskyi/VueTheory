import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';
import Vue from 'vue';
import App from './App.vue';
import Car from './Car.vue';
import Counter from './Counter.vue';
import Color from './color.js';
import Onoff from './Onoff.vue';
import router from './routes.js';
import VueResource from 'vue-resource';
export const eventEmitter = new Vue();

Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component('app-car', Car);
Vue.component('app-counter', Counter);
Vue.component('app-onoff', Onoff);
Vue.directive('color', Color);
new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
});

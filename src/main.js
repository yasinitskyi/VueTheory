import Vuelidate from 'vuelidate';
import Vue from 'vue';
import App from './App.vue';
import Car from './Car.vue';
import Counter from './Counter.vue';
import Color from './color.js';
import Onoff from './Onoff.vue';
export const eventEmitter = new Vue();

Vue.use(Vuelidate);

Vue.component('app-car', Car);
Vue.component('app-counter', Counter);
Vue.component('app-onoff', Onoff);
Vue.directive('color', Color);
new Vue({
  el: '#app',
  render: h => h(App)
});

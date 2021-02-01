import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Cars from './pages/Cars.vue';
import Car from './pages/Car.vue';
import CarFull from './pages/CarFull.vue';
import ErrorCpm from './pages/Error.vue';


export default new VueRouter ({
  routes: [
    {
      path: '', //localhost:8080
      component: Home
    },
    {
      path: '/cars', //localhost:8080/cars
      component: Cars
    },
    {
      path: '/car/:id', //localhost:8080/car/???
      component: Car,
      children: [
        {
          path: 'full', //localhost:8080/car/???/full
          component: CarFull,
          name: 'carFull',
          beforeEnter(to, from, next) {
            next();
          }
        }
      ]
    },
    {
      path: '/none',
      redirect: '/'
    },
    {
      path: '*',
      component: ErrorCpm,
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return {
        selector: to.hash
      };
    }
  }
});
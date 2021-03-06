import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home/Home.vue';
import Playground from '../components/Playground/Playground.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/playground',
      name: 'Playground',
      component: Playground,
    },
  ],
});

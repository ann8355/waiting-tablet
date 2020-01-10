import Vue from 'vue';
import Router from 'vue-router';
import TakeNum from '@/pages/TakeNum';
import Setting from '@/pages/Setting';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'TakeNum',
      component: TakeNum,
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting,
    },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ],
});

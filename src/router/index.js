import Vue from 'vue';
import NProgress from 'nprogress';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import r from '@/constants/routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: r.HOME,
    component: Home,
    exact: true,
  },
  {
    path: '/page/:type/:slug',
    name: r.PAGE,
    component: () => import('@/views/Page.vue'),
  },
  {
    path: '/login',
    name: r.LOGIN,
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/forgot-password',
    name: r.FORGOT_PASSWORD,
    component: () => import('@/views/ForgotPassword'),
  },
  {
    path: '/reset-password',
    name: r.RESET_PASSWORD,
    component: () => import('@/views/ResetPassword'),
  },
  {
    path: '/contact',
    name: r.CONTACT,
    component: () => import('@/views/Contact.vue'),
  },
  {
    path: '/error',
    name: r.ERROR,
    component: () => import('@/views/Error'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;

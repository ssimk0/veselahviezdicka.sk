import Vue from 'vue';
import NProgress from 'nprogress';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import r from '@/constants/routes';
import routeChecks from '@/utils/routeChecks';

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
    component: () => import('@/views/page/Page.vue'),
  },
  {
    path: '/page/:type/:slug/Edit',
    name: r.PAGE_EDIT,
    component: () => import('@/views/page/Edit.vue'),
    beforeEnter: (to, from, next) => {
      routeChecks.onlyEditor(next);
    },
  },
  {
    path: '/gallery/',
    name: r.GALLERY,
    component: () => import('@/views/gallery/Index'),
  },
  {
    path: '/gallery/create',
    name: r.GALLERY_CREATE,
    component: () => import('@/views/gallery/Create'),
  },
  {
    path: '/gallery/:slug',
    name: r.GALLERY_DETAIL,
    component: () => import('@/views/gallery/Detail'),
  },
  {
    path: '/gallery/:slug/upload',
    name: r.UPLOAD,
    component: () => import('@/views/gallery/Upload'),
    beforeEnter: (to, from, next) => {
      routeChecks.onlyEditor(next);
    },
  },
  {
    path: '/login',
    name: r.LOGIN,
    component: () => import('@/views/Login.vue'),
    beforeEnter: (to, from, next) => {
      routeChecks.onlyNotLogged(next);
    },
  },
  {
    path: '/forgot-password',
    name: r.FORGOT_PASSWORD,
    component: () => import('@/views/ForgotPassword'),
    beforeEnter: (to, from, next) => {
      routeChecks.onlyNotLogged(next);
    },
  },
  {
    path: '/reset-password',
    name: r.RESET_PASSWORD,
    component: () => import('@/views/ResetPassword'),
    beforeEnter: (to, from, next) => {
      routeChecks.onlyNotLogged(next);
    },
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
  {
    path: '/menu/upload',
    name: r.MENU_UPLOAD,
    component: () => import('@/views/Menu/Upload'),
    beforeEnter: (to, from, next) => {
      routeChecks.onlyEditor(next);
    },
  },
  {
    path: '/menu',
    name: r.MENU,
    component: () => import('@/views/Menu/Index'),
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

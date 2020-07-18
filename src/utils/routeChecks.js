import store from '@/store';
import routes from '@/constants/routes';

export default {
  onlyLogged(next) {
    const { user } = store.getters;
    if (Object.keys(user).length > 0) {
      next();
    } else {
      next({
        name: routes.LOGIN,
        query: { sessionExpired: true },
      });
    }
  },
  onlyAdmin(next) {
    const { user } = store.getters;
    if (user.is_admin) {
      next({
        replace: true,
      });
    } else {
      next(routes.NOT_FOUND);
    }
  },
  onlyEditor(next) {
    const { user } = store.getters;
    if (user.can_edit || user.is_admin) {
      next();
    } else {
      next(routes.NOT_FOUND);
    }
  },
  onlyNotLogged(next) {
    const { user } = store.getters;
    if (Object.keys(user).length > 0) {
      next({
        name: routes.HOME,
        query: { p: 1 },
      });
    } else {
      next();
    }
  },

};

import { extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';

export default (i18n) => {
  extend('required', {
    ...required,
    message: i18n.t('validations.required'),
  });

  extend('email', {
    ...email,
    message: i18n.t('validations.email'),
  });

  extend('min', {
    ...min,
    message: i18n.t('validations.min'),
  });
};

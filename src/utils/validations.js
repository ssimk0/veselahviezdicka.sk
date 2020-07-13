import { extend } from 'vee-validate';

export default (i18n) => {
  extend('required', {
    validate(value) {
      return {
        required: true,
        valid: ['', null, undefined].indexOf(value) === -1,
      };
    },
    message: i18n.t('validations.required'),
    computesRequired: true,
  });

  extend('min', {
    validate(value, { length }) {
      return value.length >= length;
    },
    params: ['length'],
    message: i18n.t('validations.min'),
  });
};

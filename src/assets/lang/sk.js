export default {
  brandName: 'Vesela Hviezdicka',
  validations: {
    required: '{_field_} je požadovaný',
    min: '{_field_} musi mať aspoň {length} znakov',
    email: '{_field_} nema správny tvar',
  },
  navigation: {
    dinningMenu: 'Jedaleň',
    contact: 'Kontakt',
  },
  forgotPassword: {
    buttons: {
      confirm: 'Odoslať',
    },
    labels: {
      Email: 'Email',
    },
    messages: {
      success: 'Email s inštrukciami bol odoslaný na váš email',
    },
  },
  pageEdit: {
    buttons: {
      confirm: 'Uložiť',
    },
    labels: {
      Body: 'Obsah',
      Title: 'Titulok',
    },
    messages: {
      success: 'Stránka sa podarila upraviť',
    },
  },
  resetPassword: {
    buttons: {
      confirm: 'Zmeniť',
    },
    labels: {
      Password: 'Heslo',
      ConfirmPassword: 'Potvrdenie Hesla',
    },
    messages: {
      success: 'Heslo bolo uspešne zmenené možete pokračovat prihlasením',
      expired: 'Formulár na zmenu hesla už expiroval skuste to znova',
    },
  },
  login: {
    buttons: {
      confirm: 'Prihlásiť',
      forgotPassword: 'Zabudnuté heslo',
    },
    labels: {
      Email: 'Email',
      Password: 'Heslo',
    },
  },
  messages: {
    error: 'Niečo sa nepodarilo skuste to znova, alebo neskor',
  },
};

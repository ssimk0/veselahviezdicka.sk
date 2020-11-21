export default {
  brandName: 'Vesela Hviezdicka',
  validations: {
    required: '{_field_} je požadovaný',
    min: '{_field_} musi mať aspoň {length} znakov',
    email: '{_field_} nema správny tvar',
    ext: '{_field_} nema správny format',
    uploadType: 'Uploadovať je povolené iba obrázky',
    uploadSize: 'Veľkosť obrázka {{ filesize }} je väčšia ako dovolena: {{ maxFilesize }}',
  },
  navigation: {
    dinningMenu: 'Jedalny lístok',
    contact: 'Kontakt',
    gallery: 'Fotogaleria',
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
  form: {
    fields: {
      upload: {
        buttons: {
          upload: '<i class=\'fas fa-cloud-upload-alt pr-2\'></i>Potiahni sem alebo klikni',
        },
      },
    },
  },
  messages: {
    error: 'Niečo sa nepodarilo skuste to znova, alebo neskor',
  },
  buttons: {
    edit: 'Upraviť',
    upload: 'Nahrať',
  },
  menuUpload: {
    labels: {
      File: 'Subor',
    },
  },
  galleryCreate: {
    pageTitle: 'Vytvoriť galeriu',
    buttons: {
      confirm: 'Vytvoriť',
    },
    labels: {
      Name: 'Meno',
    },
  },
  gallery: {
    labels: {
      description: 'Popis',
      image: 'Obrázok',
    },
    buttons: {
      create: 'Vytvoriť novú',
      confirm: 'Narhať',
    },
  },
};

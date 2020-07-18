<template>
  <div class="row justify-content-center align-items-center">
    <ValidationObserver v-slot="{ handleSubmit }" class="col-4 pt-5">
      <form @submit.prevent="handleSubmit(submit)">
        <ValidationProvider v-slot="v" rules="required|min:6"
                            :name="$t('resetPassword.labels.Password')"
                            :debounce="300">
          <b-form-group>
            <label>{{ $t('resetPassword.labels.Password') }}</label>
            <b-input v-model="password" type="password"></b-input>
            <div class="help-block with-errors text-danger"
                 v-if=v.errors[0]>{{ v.errors[0] }}
            </div>
          </b-form-group>
        </ValidationProvider>
        <ValidationProvider v-slot="v" rules="required|min:6"
                            :name="$t('resetPassword.labels.ConfirmPassword')"
                            :debounce="300">
          <b-form-group>
            <label>{{ $t('resetPassword.labels.ConfirmPassword') }}</label>
            <b-input v-model="confirm" type="password"></b-input>
            <div class="help-block with-errors text-danger"
                 v-if=v.errors[0]>{{ v.errors[0] }}
            </div>
          </b-form-group>
        </ValidationProvider>
        <b-button size="xs" type="submit" variant="primary" :disabled="disabled">
          {{ $t('resetPassword.buttons.confirm') }}
        </b-button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import user from '@/api/user';
import routes from '@/constants/routes';

export default {
  name: 'ResetPassword',
  beforeRouteEnter(to, from, next) {
    if (to.query.token) {
      next();
    } else {
      next('/');
    }
  },
  data() {
    return {
      password: '',
      confirm: '',
      disabled: false,
    };
  },
  methods: {
    submit() {
      if (!this.disabled) {
        this.disabled = true;
        user.resetPassword({
          passwordConfirmation: this.confirm,
          password: this.password,
          token: this.$route.query.token,
        })
          .then(() => {
            this.disabled = false;
            this.$toasted.success(this.$t('resetPassword.messages.success'));
            this.$router.push({
              name: routes.LOGIN,
            });
          }, () => {
            this.$toasted.error(this.$t('resetPassword.messages.expired'));
            this.disabled = false;
            this.$router.push({
              name: routes.FORGOT_PASSWORD,
            });
          });
      }
    },
  },
};
</script>

<style scoped>

</style>

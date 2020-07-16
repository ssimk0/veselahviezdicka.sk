<template>
  <div class="row justify-content-center align-items-center">
    <ValidationObserver v-slot="{ handleSubmit }" class="col-4 pt-5">
      <form @submit.prevent="handleSubmit(submit)">
        <ValidationProvider v-slot="v" rules="required|min:3" name="Email" :debounce="300">
          <b-form-group>
            <label>{{ $t('login.labels.Email') }}</label>
            <b-input v-model="email" type="email"></b-input>
            <div class="help-block with-errors text-danger"
                 v-if=v.errors[0]>{{ v.errors[0] }}
            </div>
          </b-form-group>
        </ValidationProvider>
        <ValidationProvider v-slot="v" rules="required|min:6" name="Heslo" :debounce="300">
          <b-form-group>
            <label>{{ $t('login.labels.Password') }}</label>
            <b-input v-model="password" type="password"></b-input>
            <div class="help-block with-errors text-danger"
                 v-if=v.errors[0]>{{ v.errors[0] }}
            </div>
          </b-form-group>
        </ValidationProvider>
        <div class="text-left">
          <b-button size="xs" type="submit" variant="primary">
            {{ $t('login.buttons.confirm') }}
          </b-button>
          <router-link to="/forgot-password" class="text-primary ml-2">
            {{ $t('login.buttons.forgotPassword') }}
          </router-link>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import r from '@/constants/routes';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.token !== '' && vm.token != null) {
        next('/');
        return false;
      }

      return true;
    });
  },
  methods: {
    ...mapActions(['login']),
    submit() {
      this.login({
        email: this.email,
        password: this.password,
      })
        .then(() => {
          this.$router.push({
            name: r.HOME,
          });
        }, () => {
          this.$toasted.error(this.$t('messages.error'));
        });
    },
  },
  computed: {
    ...mapGetters(['token']),
  },
};
</script>

<style scoped>

</style>

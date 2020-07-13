<template>
  <div class="row justify-content-center align-items-center">
    <ValidationObserver v-slot="{ handleSubmit }" class="col-4 pt-5">
    <form @submit.prevent="handleSubmit(submit)">
        <ValidationProvider v-slot="v" rules="required|min:3" name="Email" :debounce="300">
            <b-form-group>
                <label>Email</label>
                <b-input v-model="email" type="email"></b-input>
                <div class="help-block with-errors text-danger"
                v-if=v.errors[0]>{{v.errors[0]}}</div>
            </b-form-group>
        </ValidationProvider>
        <ValidationProvider v-slot="v" rules="required|min:6" name="Heslo" :debounce="300">
            <b-form-group>
                <label>Password</label>
                <b-input v-model="password" type="password"></b-input>
                <div class="help-block with-errors text-danger"
                v-if=v.errors[0]>{{v.errors[0]}}</div>
            </b-form-group>
        </ValidationProvider>

        <b-button size="xs" type="submit" variant="primary">Login</b-button>
    </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['login']),
    submit() {
      this.login({
        email: this.email,
        password: this.password,
      }).then(() => {
        this.$router.push({
          name: 'Home',
        });
      }, () => {
        this.$router.push({
          name: 'Error',
        });
      });
    },
  },
};
</script>

<style scoped>

</style>

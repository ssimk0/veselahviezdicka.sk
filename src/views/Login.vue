<template>
  <div class="row justify-content-center align-items-center">
    <form class="col-4 pt-5"  @submit.prevent="login">
        <ValidationProvider v-slot="v" rules="required|min:3" name="Email" debounce=300>
            <b-form-group>
                <label>Email</label>
                <b-input v-model="email" type="email"></b-input>
                <div class="help-block with-errors text-danger"
                v-if=v.errors[0]>{{v.errors[0]}}</div>
            </b-form-group>
        </ValidationProvider>
        <ValidationProvider v-slot="v" rules="required|min:6" name="Heslo" debounce=300>
            <b-form-group>
                <label>Password</label>
                <b-input v-model="password" type="password"></b-input>
                <div class="help-block with-errors text-danger"
                v-if=v.errors[0]>{{v.errors[0]}}</div>
            </b-form-group>
        </ValidationProvider>

        <b-button size="xs" type="submit">Login</b-button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('now');
    },
  },
};
</script>

<style scoped>

</style>

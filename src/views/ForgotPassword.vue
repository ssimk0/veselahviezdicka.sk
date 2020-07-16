<template>
  <div class="row justify-content-center align-items-center">
    <ValidationObserver v-slot="{ handleSubmit }" class="col-4 pt-5">
      <form @submit.prevent="handleSubmit(submit)">
        <ValidationProvider v-slot="v" rules="required|min:3" name="Email" :debounce="300">
          <b-form-group>
            <label>{{ $t('forgotPassword.labels.Email') }}</label>
            <b-input v-model="email" type="email"></b-input>
            <div class="help-block with-errors text-danger"
                 v-if=v.errors[0]>{{ v.errors[0] }}
            </div>
          </b-form-group>
        </ValidationProvider>
        <b-button size="xs" type="submit" variant="primary">
          {{ $t('forgotPassword.buttons.confirm') }}
        </b-button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import user from '@/api/user';

export default {
  name: 'ForgotPassword',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    submit() {
      user.forgotPassword({
        email: this.email,
      })
        .then(() => {
          this.$toasted.success(this.$t('forgotPassword.messages.success'));
        }, () => {
          this.$toasted.error(this.$t('messages.error'));
        });
    },
  },
};
</script>

<style scoped>

</style>

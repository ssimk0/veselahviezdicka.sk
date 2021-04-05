<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-12 pt-3">
      <h3>{{ $t('galleryCreate.pageTitle') }}</h3>
      <hr/>
    </div>
    <ValidationObserver v-slot="{ handleSubmit }" class="col-12 pt-3">
      <form @submit.prevent="handleSubmit(submit)">
        <ValidationProvider v-slot="v" rules="required|min:3"
                            :name="$t('galleryCreate.labels.Name')" :debounce="300">
          <b-form-group>
            <label>{{ $t('galleryCreate.labels.Name') }}</label>
            <b-input v-model="name" type="text" name="name"></b-input>
            <div class="help-block with-errors text-danger"
                 v-if=v.errors[0]>{{ v.errors[0] }}
            </div>
          </b-form-group>
        </ValidationProvider>
        <div class="text-right">
          <b-button size="xs" type="submit" variant="primary" :disabled="disabled">
            {{ $t('galleryCreate.buttons.confirm') }}
          </b-button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import uploads, { GALLERY_TYPE } from '@/api/uploads';
import routes from '@/constants/routes';

export default {
  name: 'Create.vue',
  data() {
    return {
      disabled: false,
      name: '',
    };
  },
  methods: {
    submit() {
      if (!this.disabled) {
        this.disabled = true;
        uploads.createCategory({
          name: this.name,
          type: GALLERY_TYPE,
          description: '-',
          subPath: this.name.toLowerCase().replace(' ', '-'),
        })
          .then(() => {
            this.disabled = false;
            this.$router.push({
              name: routes.GALLERY,
            });
          }, () => {
            this.$router.push({
              name: routes.ERROR,
            });
          });
      }
    },
  },
};
</script>

<style scoped>

</style>

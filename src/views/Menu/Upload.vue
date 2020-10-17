<template>
  <div class="row justify-content-center align-items-center">
    <ValidationObserver v-slot="{ handleSubmit }" class="col-12 pt-5">
      <div v-if="error" class="alert alert-danger">
        {error}
      </div>
      <form @submit.prevent="handleSubmit(submit)">
        <ValidationProvider v-slot="v" rules="required|ext:pdf" ref="provider"
                            :name="$t('menuUpload.labels.File')" :debounce="300">
          <b-form-group>
            <label>{{ $t('menuUpload.labels.File') }}</label>
            <input name="file" type="file" class="form-inline" @change="handleFileChange"
                   ref="file"/>
            <div class="help-block with-errors text-danger"
                 v-if=v.errors[0]>{{ v.errors[0] }}
            </div>
          </b-form-group>
        </ValidationProvider>
        <div class="text-right pt-4">
          <b-button size="xs" type="submit" variant="primary" :disabled="disabled">
            {{ $t('buttons.upload') }}
          </b-button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { MENU_TYPE } from '@/api/uploads';
import routes from '@/constants/routes';
import axios from 'axios';

export default {
  name: 'Upload',
  methods: {
    submit() {
      this.disabled = true;

      const data = new FormData();
      const file = this.$refs.file.files[0];
      data.append('file', file, file.name);
      axios.post(`${axios.defaults.baseURL}/api/v1/uploads/${MENU_TYPE}/weekly`, data)
        .then(() => {
          this.uploaded();
        })
        .catch((err) => {
          this.error = `HTTP Error: ${err.message}`;
        });
    },
    uploaded() {
      this.$router.push({
        name: routes.MENU,
      });
    },
    async handleFileChange(e) {
      await this.$refs.provider.validate(e);
    },
  },
  data() {
    return {
      disabled: false,
    };
  },
};
</script>

<template>
  <div class="row justify-content-center align-items-center p-4">
    <ValidationObserver v-slot="{ handleSubmit }" class="col-12 pt-5">
      <form @submit.prevent="handleSubmit(submit)">
        <div class="form-group">
          <div class="w-50 mx-auto pt-4" v-if="loadedFile">
            <img :src="loadedFile" alt="file" class="img-fluid"/>
          </div>

          <label>{{ $t('gallery.labels.image') }}</label>
          <input type="file" name="file" ref="file" class="form-control inline"
                 @change="updateFile"/>
        </div>
        <div class="form-group">
          <label>{{ $t('gallery.labels.description') }}</label>
          <b-input name="description" v-model="desc"/>
        </div>
        <div class="text-right pt-4">
          <b-button size="xs" type="submit" variant="primary" :disabled="disabled">
            {{ $t('gallery.buttons.confirm') }}
          </b-button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { GALLERY_TYPE } from '@/api/uploads';
import routes from '@/constants/routes';
import axios from 'axios';

export default {
  name: 'Upload',
  methods: {
    submit() {
      this.disabled = true;
      const url = `${axios.defaults.baseURL}/api/v1/uploads/${GALLERY_TYPE}/${this.$route.params.slug}`;

      const data = new FormData();
      const file = this.$refs.file.files[0];
      data.append('file', file, file.name);
      data.append('description', this.desc);
      axios.post(url, data)
        .then(() => {
          this.disabled = false;
          this.uploaded();
        })
        .catch((err) => {
          this.disabled = false;
          this.error = `HTTP Error: ${err.message}`;
        });
    },
    uploaded() {
      this.$router.push({
        name: routes.GALLERY_DETAIL,
        param: {
          slug: this.$route.params.category,
        },
      });
    },
    updateFile() {
      if (this.$refs.file.files && this.$refs.file.files.length > 0) {
        // eslint-disable-next-line prefer-destructuring
        this.file = this.$refs.file.files[0];

        const reader = new FileReader();

        reader.onload = (e) => {
          this.loadedFile = e.target.result;
        };

        reader.readAsDataURL(this.file);
      }
    },
  },
  data() {
    return {
      category: this.$route.params.slug,
      disabled: false,
      file: null,
      desc: null,
      loadedFile: null,
    };
  },
};
</script>

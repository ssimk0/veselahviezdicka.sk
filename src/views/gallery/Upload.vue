<template>
  <div class="row justify-content-center align-items-center">
    <ValidationObserver v-slot="{ handleSubmit }" class="col-12 pt-5">
      <form @submit.prevent="handleSubmit(submit)">
        <vue-dropzone :options="dropzoneOptions" id="uploader"
                      @vdropzone-queue-complete="uploaded" ref="uploader">
        </vue-dropzone>
        <div class="text-right pt-4">
          <b-button size="xs" type="submit" variant="primary" :disabled="disabled">
            {{ $t('pageEdit.buttons.confirm') }}
          </b-button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import { GALLERY_TYPE } from '@/api/uploads';
import routes from '@/constants/routes';
import axios from 'axios';

export default {
  name: 'Upload',
  components: {
    vueDropzone: () => import('vue2-dropzone'),
  },
  methods: {
    submit() {
      this.disabled = true;
      this.$refs.uploader.processQueue();
    },
    uploaded() {
      this.$router.push({
        name: routes.GALLERY_DETAIL,
        param: {
          slug: this.$route.params.category,
        },
      });
    },
  },
  data() {
    return {
      category: this.$route.params.slug,
      disabled: false,
      dropzoneOptions: {
        url: `${axios.defaults.baseURL}/api/v1/uploads/${GALLERY_TYPE}/${this.$route.params.slug}`,
        thumbnailWidth: 200,
        addRemoveLinks: true,
        autoProcessQueue: false,
        dictDefaultMessage: this.$t('form.fields.upload.buttons.upload'),
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        parallelUploads: 3,
        paramName: 'file',
        acceptedFiles: 'image/*',
        dictFileTooBig: this.$t('validations.uploadSize'),
        dictInvalidFileType: this.$t('validations.uploadType'),
      },
    };
  },
};
</script>

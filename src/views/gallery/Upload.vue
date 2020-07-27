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
      console.log(this.$refs.uploader.getAcceptedFiles());
    },
  },
  data() {
    return {
      category: this.$route.params.category,
      disabled: false,
      dropzoneOptions: {
        url: `/api/v1/uploads/${GALLERY_TYPE}/${this.$route.params.category}`,
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

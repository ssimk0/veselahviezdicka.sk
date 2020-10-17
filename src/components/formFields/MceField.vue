<template>
  <b-form-group>
    <label>{{ label }}</label>
    <div class="mb-3">
      <small v-if="note">{{ note }}</small>
    </div>
    <vue-mce :init="config" @input="update"
             :initial-value="initValue"
             v-model="content"
             :api-key="apiKey"
             ref="editor"/>
  </b-form-group>
</template>

<script>
import axios from 'axios';
import { PAGES_TYPE } from '@/api/uploads';

export default {
  name: 'MceField',
  props: {
    note: String,
    initValue: String,
    value: String,
    label: String,
  },
  data: () => ({
    apiKey: 'l1vv22obp09u6lv98hvp8fksoyoda2mo65dtmzg1r13bodzi',
    content: '',
    config: {
      // theme: 'modern',
      plugins:
        'advlist autolink lists link image charmap print code preview table hr anchor pagebreak',
      fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
      language: 'sk',
      image_advtab: true,
      images_upload_handler(blobInfo, success, failure) {
        const data = new FormData();
        data.append('file', blobInfo.blob(), blobInfo.filename());
        axios.post(`/api/v1/uploads/${PAGES_TYPE}/media`, data)
          .then((res) => {
            success(res.data.file);
          })
          .catch((err) => {
            failure(`HTTP Error: ${err.message}`);
          });
      },
      relative_urls: false,
      height: 300,
      statusbar: false,
      menubar: false,
      toolbar: 'undo redo | fontselect  fontsizeselect forecolor | bold italic underline strikethrough hr | alignleft  aligncenter alignright alignjustify | bullist numlist blockquote outdent indent table | link image imagetools | removeformat code fullscreen',
    },
  }),
  components: {
    'vue-mce': () => import('@tinymce/tinymce-vue'),
  },
  methods: {
    update() {
      this.$emit('input', this.content);
    },
  },
};
</script>

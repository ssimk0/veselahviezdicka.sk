<template>
  <div>
    <viewer v-if="imagesArray" :images="imagesArray" :options="options" class="viewer" ref="viewer">
      <div class="row">
        <div class="col-4 mt-2 text-center" v-for="img in images.uploads" :key="img.id">
          <b-img-lazy :src="img.file" class="gal-img img-thumbnail img-fluid " :alt="img.desc"/>
        </div>
      </div>
    </viewer>
  </div>
</template>

<script>
import { GALLERY_TYPE } from '@/api/uploads';
import { mapActions, mapGetters } from 'vuex';
import 'viewerjs/dist/viewer.css';

export default {
  name: 'Detail',
  data() {
    return {
      category: this.$route.params.slug,
      type: GALLERY_TYPE,
      options: {
        inline: false,
        button: false,
        navbar: false,
        title: false,
        toolbar: true,
        tooltip: false,
        movable: false,
        zoomable: false,
        rotatable: false,
        scalable: false,
        transition: true,
        fullscreen: true,
        keyboard: true,
      },
    };
  },
  components: {
    Viewer: () => import('v-viewer/src/component'),
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // if (vm.categories === null || vm.categories === undefined) {
      vm.getUploadsByCategory({
        type: GALLERY_TYPE,
        category: to.params.slug,
      })
        .then(() => {
          next();
        });
      // }
    });
  },
  methods: {
    ...mapActions(['getUploadsByCategory']),
  },
  computed: {
    ...mapGetters(['uploads']),
    images() {
      return this.uploads && this.uploads[this.category]
        ? this.uploads[this.category]
        : null;
    },
    imagesArray() {
      if (this.images) {
        return this.images.uploads.map((img) => img.file);
      }
      return [];
    },
  },
};
</script>

<style scoped>
.gal-img {
  height: 150px;
}
</style>

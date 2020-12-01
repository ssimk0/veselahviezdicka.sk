<template>
  <div>
    <div v-if="user && (user.is_admin || user.can_edit)" class="row">
      <div class="col admin-button">
        <router-link :to="`/gallery/${$route.params.slug}/upload`"
                     class="fas fa-cloud-upload-alt float-right h4 mt-2 btn btn-xs btn-primary">
          {{ $t('buttons.upload') }}
        </router-link>
      </div>
    </div>
    <div>
      <router-link to="/gallery">{{ $t('buttons.back') }}</router-link>
    </div>
    <viewer v-if="imagesArray && images" :images="imagesArray" :options="options"
            class="viewer" ref="viewer">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-2 text-center gal-img-wrapper"
             v-for="img in images.upload" :key="img.id">
          <b-img-lazy :src="img.file" class="gal-img img-thumbnail img-fluid " :alt="img.desc"/>
          <div class="pt-4" v-if="user && (user.is_admin || user.can_edit)" >
            <button class="btn btn-danger" @click="() => deleteImage(img.id)">
              {{ $t('buttons.delete') }}
            </button>
          </div>
        </div>
      </div>
    </viewer>
  </div>
</template>

<script>
import uploads, { GALLERY_TYPE } from '@/api/uploads';
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
    deleteImage(id) {
      uploads.delete({
        category: this.$route.params.slug,
        type: GALLERY_TYPE,
        id,
      }).then(() => {
        this.getUploadsByCategory({
          type: GALLERY_TYPE,
          category: this.$route.params.slug,
        });
      });
    },
  },
  computed: {
    ...mapGetters(['uploads', 'user']),
    images() {
      return this.uploads && this.uploads[this.category]
        ? this.uploads[this.category]
        : null;
    },
    imagesArray() {
      if (this.images) {
        return this.images.upload.map((img) => img.file);
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

.gal-img-wrapper {
  position: relative;
}

.gal-img-wrapper i {
  position: absolute;
  top: 0;
  left: 0;
  color: red;
}
</style>

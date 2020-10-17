<template>
  <div id="gallery-detail">
    <div v-if="user && (user.is_admin || user.can_edit)" class="row">
      <div class="col admin-button">
        <router-link :to="`/gallery/${$route.params.slug}/upload`"
                     class="fas fa-cloud-upload-alt float-right h4 mt-2">
          {{ $t('buttons.upload') }}
        </router-link>
      </div>
    </div>
    <div class="row" v-if="imagesArray && imagesArray.length">
      <div class="col-4 mt-2 text-center" @click="showImage(idx)"
           v-for="(img, idx) in imagesArray" :key="img.id">
        <b-img-lazy :src="img.thumbUrl"
                    class="gal-img img-thumbnail img-fluid "
                    :alt="img.caption"
                    :title="img.caption"/>
      </div>
      <ImageBox
        v-if="imagesArray.length > 0 && index != null"
        :images="imagesArray"
        :index="index"
        @close="index = null"
        bgcolor="rgba(51, 51, 51, .9)"
      />
    </div>

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
      index: null,
    };
  },
  components: {
    ImageBox: () => import('vue-image-box'),
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
    showImage(idx) {
      console.log(idx);
      this.index = idx;
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
        return this.images.upload.map((img) => ({
          imageUrl: img.file,
          thumbUrl: img.thumbnail,
          caption: img.description,
        }));
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

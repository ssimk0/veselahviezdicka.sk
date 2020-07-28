<template>
  <div>
    <div v-if="user && (user.is_admin || user.can_edit)" class="row">
      <div class="col-12 admin-button">
        <router-link :to="`/gallery/create`"
                     class="fas fa-plus float-right h4 mt-2">
          {{ $t('gallery.buttons.create') }}
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-4" :key="category.id" v-for="category in categories">
        <router-link :to="`/gallery/${category.slug}`" class="card-link">
          <b-card

            :img-src="category.thumbnail || 'https://via.placeholder.com/150'"
            img-alt="Image"
            img-top
            tag="article"
            class="mt-2 mr-2"
          >
            <b-card-text>
              {{ category.name }}
            </b-card-text>
          </b-card>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { GALLERY_TYPE } from '@/api/uploads';

export default {
  name: 'Index',
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // if (vm.categories === null || vm.categories === undefined) {
      vm.getUploadsCategories(GALLERY_TYPE)
        .then(() => {
          next();
        });
      // }
    });
  },
  data() {
    return {
      galleryType: GALLERY_TYPE,
    };
  },
  methods: {
    ...mapActions(['getUploadsCategories']),
    test() {
      this.$bvToast.toast('Toast body content', {
        title: 'Variant default',
        variant: 'success',
        solid: true,
        appendToast: true,
        toaster: 'b-toaster-top-right',
      });
    },
  },
  computed: {
    ...mapGetters(['uploadCategories', 'user']),
    categories() {
      return this.uploadCategories && this.uploadCategories[GALLERY_TYPE]
        ? this.uploadCategories[GALLERY_TYPE]
        : null;
    },
  },
};
</script>

<style scoped>

</style>

<template>
  <div class="pt-3 container" v-if="page">
    <div>
      <div class="body" v-html=page.body></div>
    </div>
    <div v-if="user && (user.is_admin || user.can_edit)"
         class="admin-button d-flex justify-content-end">
      <router-link :to="`/page/${$route.params.type}/${$route.params.slug}/edit`"
                   class="text-secondary btn btn-xs btn-primary float-right h4">
        <i class="fas fa-pencil-alt"></i>
        {{ $t('buttons.edit') }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Page',
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.page === null || vm.page === undefined) {
        vm.getPage({
          type: to.params.type,
          slug: to.params.slug,
        })
          .then(() => {
            next();
          });
      }
    });
  },
  beforeRouteUpdate(to, from, next) {
    if (
      !this.details[to.params.type]
      || (this.details[to.params.type] && !this.details[to.params.type][to.params.slug])
    ) {
      this.getPage({
        type: to.params.type,
        slug: to.params.slug,
      })
        .then(() => {
          next();
        });
    } else {
      next();
    }
  },
  methods: {
    ...mapActions(['getPage']),
  },
  computed: {
    ...mapGetters(['details', 'user']),
    page() {
      return this.details[this.$route.params.type]
        ? this.details[this.$route.params.type][this.$route.params.slug]
        : null;
    },
  },
};
</script>

<style scoped>

</style>

<template>
  <div class="pt-3">
    <div v-if="user && (user.is_admin || user.can_edit)" class="admin-button">
      <router-link :to="`/page/${$route.params.type}/${$route.params.slug}/edit`"
                   class="fas fa-pencil-alt float-right h4">
        {{$t('buttons.edit')}}
      </router-link>
    </div>
    <div v-if="page">
      <h3 class="title">{{ page.title }}</h3>
      <hr/>
      <div class="body" v-html=page.body></div>
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

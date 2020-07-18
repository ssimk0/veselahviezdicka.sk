<template>
  <div class="pt-3">
    <div v-if="user && (user.is_admin || user.can_edit)">
      <router-link :to="`/page/${$route.params.type}/${$route.params.slug}/edit`"
                   class="fas fa-pencil-alt float-right h3"></router-link>
    </div>
    <h3>{{ page.title }}</h3>
    <div v-html=page.body></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Page',
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getPage({
        type: to.params.type,
        slug: to.params.slug,
      })
        .then(() => {
          next();
        });
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
        : {};
    },
  },
};
</script>

<style scoped>

</style>

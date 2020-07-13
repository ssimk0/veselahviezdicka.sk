<template>
  <div>
    {{page.title}}
    <div v-html=page.body></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Page',
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log(to);
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
    ...mapGetters(['details']),
    page() {
      return this.details[this.$route.params.type][this.$route.params.slug];
    },
  },
};
</script>

<style scoped>

</style>

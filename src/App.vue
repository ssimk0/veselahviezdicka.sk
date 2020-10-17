<template>
  <div id="app">
    <b-container fluid="true">
      <b-toast>
      </b-toast>
      <div class="fixed-top background-white" id="top-menu">
        <top-info-bar/>
        <main-nav-bar :slug="slug"/>
      </div>
      <div class="col content" >
        <router-view/>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TopInfoBar from '@/components/layout/TopInfoBar.vue';
import MainNavBar from '@/components/layout/MainNavBar.vue';

export default {
  components: {
    MainNavBar,
    TopInfoBar,
  },
  mounted() {
    if (this.pages === null || this.pages === undefined) {
      this.getPagesByCategorySlug(this.slug);
    }
  },
  data() {
    return {
      slug: 'menu',
    };
  },
  methods: {
    ...mapActions(['getPagesByCategorySlug']),
  },
};

</script>

<style >

.background-white {
  background-color: white;
}
</style>

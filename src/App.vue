<template>
  <div id="app">
    <div fluid="true">
      <b-toast>
      </b-toast>
      <div class="fixed-top background-white" id="top-menu">
        <top-info-bar/>
        <main-nav-bar :slug="slug"/>
      </div>
      <div class="col content">
        <router-view/>
      </div>
      <div class="d-flex justify-content-between bd-highlight">
        <div>
            <img src="/footer_left.png" height="50"  />
        </div>
        <div>
          <p class="text-center align-bottom">
           {{(new Date()).getFullYear()}} © Vesela Hviezdička
          </p>
        </div>
        <div>
            <img src="/footer_right.png" class="float-right" height="50" />
        </div>
      </div>
    </div>
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

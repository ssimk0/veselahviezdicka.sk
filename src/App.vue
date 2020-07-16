<template>
  <div id="app">
    <b-container fluid="true" id="home">
      <b-container>
        <b-row class="text-left">
          <b-col>
            <div>
              <i class="h2 ml-4 mt-4 fas fa-leaf"></i>
            </div>
            <div>
              <span>{{$t('navigation.dinningMenu')}}</span>
            </div>
          </b-col>
          <b-col class="text-right">
            <i class="fab fa-facebook-square  h2 mt-4 mb-4 mr-4"></i>
          </b-col>
        </b-row>
        <b-navbar toggleable="sm" type="dark" variant="dark" justified="true"
                  class="rounded">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-navbar-brand>{{$t('brandName')}}</b-navbar-brand>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item :href="`/page/menu/${page.slug}`"
                          :key="page.id"
                          v-for="page in pages[slug]">
                {{ page.title }}
              </b-nav-item>
              <b-nav-item href="/contact">
                {{$t('navigation.contact')}}
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <b-col>
          <router-view/>
        </b-col>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  mounted() {
    this.getPagesByCategorySlug(this.slug);
  },
  data() {
    return {
      slug: 'menu',
    };
  },
  methods: {
    ...mapActions(['getPagesByCategorySlug']),
  },
  computed: {
    ...mapGetters(['pages']),
  },
};

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

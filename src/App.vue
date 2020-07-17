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
              <span>{{ $t('navigation.dinningMenu') }}</span>
            </div>
          </b-col>
          <b-col class="text-right">
            <i class="fab fa-facebook-square  h2 mt-4 mb-4 mr-4"></i>
          </b-col>
        </b-row>
        <b-navbar toggleable="sm" type="dark" variant="dark" justified="true"
                  class="rounded">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <router-link to="/">
            <b-navbar-brand>{{ $t('brandName') }}</b-navbar-brand>
          </router-link>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <li class="nav-item" v-for="page in pages[slug]" :key="page.id">
                <router-link :to="`/page/menu/${page.slug}`" class="nav-link">
                  {{ page.title }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">
                  {{ $t('navigation.contact') }}
                </router-link>
              </li>
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

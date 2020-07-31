<template>
  <div class="shadow-sm">
    <b-container>
      <b-navbar toggleable="sm" type="light" variant="white" justified="true"
                class="row pl--0 pr-0 ">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <router-link to="/">
          <b-navbar-brand class="d-none d-sm-block">
            <img src="../../assets/logo.svg" width="100%" height="70"
                 class="d-inline-block align-top" alt="logo"/>
          </b-navbar-brand>
        </router-link>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-if="pages && pages[slug]">
            <li class="nav-item" v-for="page in pages[slug]" :key="page.id">
              <router-link :to="`/page/menu/${page.slug}`" class="nav-link">
                {{ page.title }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gallery" class="nav-link">
                {{ $t('navigation.gallery') }}
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
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MainNavBar',
  computed: {
    ...mapGetters(['pages']),
  },
  props: {
    slug: String,
  },
};
</script>

<style scoped>

</style>

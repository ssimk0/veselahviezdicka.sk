<template>
  <div>
    <b-container>
      <b-row class="text-center align-middle" id="top-menu">
        <b-col cols="1" class="border-right border-left d-none d-sm-block">
          <p class="pt-2 mb-2">
            <a href="#" class="fab fa-facebook-f text-secondary"></a>
          </p>
        </b-col>
        <b-col cols="4" class="border-right d-none d-sm-block">
          <p class="pt-2 mb-2 text-secondary">
            <i class="fas fa-clock"></i>
            Po-Pia: 6:00 - 17:00
          </p>
        </b-col>
        <b-col cols="6" class="border-right" sm="4">
          <p class="pt-2 mb-2 text-secondary">
            <a href="tel:+421907339915" class="text-secondary">
              <i class="fas fa-phone"></i>
              0907 339 915
            </a>
          </p>
        </b-col>
        <b-col cols="6" sm="3" class="border-right">
          <p class="pt-2 mb-2 ">
            <router-link to="/page/ine/jedalen" class="text-secondary">
              <i class="fas fa-utensils"></i>
              {{ $t('navigation.dinningMenu') }}
            </router-link>
          </p>
        </b-col>
      </b-row>
    </b-container>
    <div class="colorstrip"></div>
  </div>
</template>

<script>

export default {
  name: 'TopInfoBar',
};
</script>

<style scoped>

</style>

<template>
  <div>
    <b-container>
      <b-row class="text-center align-middle" id="top-menu">
        <b-col cols="6" md="1" class="border-right border-left border-small-bottom">
          <p class="pt-2 mb-2">
            <a href="https://www.facebook.com/Veselé-Hviezdičky-106384077838043" target="_blank"
               class="fab fa-facebook-f text-blue"></a>
          </p>
        </b-col>
        <b-col cols="6" md="4" class="border-right border-small-bottom">
          <p class="pt-2 mb-2 text-secondary">
            <i class="fas fa-clock"></i>
            Po-Pia: 6:00 - 17:00
          </p>
        </b-col>
        <b-col cols="6" class="border-right border-small-left" md="4">
          <p class="pt-2 mb-2 text-secondary">
            <a href="tel:+421907339915" class="text-secondary">
              <i class="fas fa-phone"></i>
              0907 339 915
            </a>
          </p>
        </b-col>
        <b-col cols="6" md="3" class="border-right">
          <p class="pt-2 mb-2 ">
            <router-link to="/menu" class="text-secondary">
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

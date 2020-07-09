<template>
  <div>
    Page
  </div>
</template>

<script>
export default {
  name: 'Page',
  beforeRouteEnter(to, from, next) {
    console.log(to.params);
    next();
  },
};
</script>

<style scoped>

</style>

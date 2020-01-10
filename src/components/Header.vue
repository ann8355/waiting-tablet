<template>
  <nav class="logo" :style="{backgroundImage: img}"></nav>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    img() {
      return `url(${require(`@/assets/images/header/${process.env.IMG_NAME}`)})`;
    },
  },
};
</script>

<style scoped lang="scss">
.logo {
  // width: 100%;
  width: 88%;
  height: 10vh;
  background-position: center center;
  // background-size: 88% 100%;
  background-repeat: no-repeat;
  margin: 0 auto;
}
</style>

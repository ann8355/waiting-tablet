<template>
<div id="app" ontouchstart>
  <Header />
  <Tabs id="tabs" />
  <router-view />
</div>
</template>

<script>
import Tabs from '@/components/Tabs';
import Header from '@/components/Header';

export default {
  name: 'YAKINIKU',
  components: {
    Header,
    Tabs,
  },
  methods: {
    async init() {
      this.$loading.show();
    },
  },
};
</script>

<style lang="scss">
@import '~@/assets/css/base';

#app {
  padding: 5vw;
}
#tabs {
  margin: 2.5vw 0 4vw 0;
}
</style>

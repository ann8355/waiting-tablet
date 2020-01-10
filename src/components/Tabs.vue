<template>
  <nav class="main-tabs">
    <ul>
      <li @click="onTabSelect($event)" :class="{'is-active': $route.path === '/' ? true : false}">
        <router-link to="/">{{ $t('common.take_num') }}</router-link>
      </li>
      <li @click="onTabSelect($event)"
      :class="{'is-active': $route.path === '/setting' ? true : false}">
        <router-link to="/setting">{{ $t('common.setting') }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'Tabs',
  methods: {
    onTabSelect(event) {
      let e = null;
      if (event.target.tagName === 'A') {
        e = event.target.parentElement;
      } else {
        e = event.target;
      }
      const items = document.getElementsByClassName('main-tabs')[0].getElementsByTagName('li');
      Array.from(items).forEach((item) => {
        item.classList.remove('is-active');
      });
      e.classList.add('is-active');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/base';
.main-tabs {
  ul {
    display: flex;
    justify-content: space-around;
  }
  li {
    a {
      color: $red;
      padding: 0 1.25em;
      line-height: 2.5rem;
      font-size: $h4;
    }
  }
  .is-active {
    border-bottom: 5px solid $red;
  }
}
</style>

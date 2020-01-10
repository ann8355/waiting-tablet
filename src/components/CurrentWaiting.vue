<template>
  <div class="waiting-groups" :style="{height: label? '100%':'60%'}">
    <p v-if="label">{{ label }}</p>
    <h1>{{ num }}</h1>
  </div>
</template>

<script>
export default {
  name: 'CurrentWaiting',
  props: {
    label: {
      type: String,
    },
    num: {
      type: String,
      default: '0',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/base';

.waiting-groups {
  width: 35%;
  color: $primary;
  border: 2px solid lighten( $primary, 70% );
  border-radius: 0.8vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.2);
  p {
    font-size: $small;
  }
  h1 {
    font-size: $h1;
  }
}
</style>

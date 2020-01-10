<template>
 <div class="input">
  <span>{{ label }}</span>
  <wpt-input :genre="type" @input="inputTxt" ref="field"></wpt-input>
 </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
    },
    txtLimited: {
      type: Number,
    },
  },
  methods: {
    inputTxt() {
      if (this.txtLimited) {
        this.$refs.field.$el.querySelector('input').value = this.$refs.field.value.substr(0, this.txtLimited);
      }
      this.$emit('value', this.$refs.field.$el.querySelector('input').value);
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/base';

.input {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: $h5;
  span {
    color: lighten( $primary, 30% );
  }
  .wpt-input {
    width: 58%;
    & /deep/ input {
      border-bottom: 2px solid lighten( $primary, 80% );
      padding: 0 10px;
      &:focus {
        border-bottom: 2px solid $red;
      }
    }
  }
}
</style>

<template>
  <div class="gender-block">
    <span>{{ $t('common.gender') }}</span>
    <div class="gender-selector">
      <wpt-button class="gender-selector-male" :class="detectStyle(male)" @click="update(male)">
        <i class="yif yif-male"></i>
        {{$t('common.male')}}
      </wpt-button>
    <wpt-button class="gender-selector-female" :class="detectStyle(female)" @click="update(female)">
        <i class="yif yif-female"></i>
        {{$t('common.female')}}
      </wpt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenderSeletor',
  data() {
    return {
      female: 2,
      male: 1,
      value: 1,
    };
  },
  methods: {
    detectStyle(value) {
      const style = [];
      if (value === this.value) style.push('active');
      return style;
    },
    update(value) {
      this.value = value;
      this.$emit('genderVal', value);
    },
  },
};

</script>

<style lang="scss">
@import '~@/assets/css/base';
$radius: 1vh;

.gender-block {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15vw;
  span {
    font-size: $h5;
    color: lighten( $primary, 30% );
  }
  .gender-selector {
    width: 58%;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    button {
      color: $white;
      width: 50%;
      height: 2.4em;
      font-size: $h6;
    }
    .gender-selector-male {
      border-radius: $radius 0 0 $radius;
      &.active {
        background-color: $blue;
      }
    }
    .gender-selector-female {
      border-radius: 0 $radius $radius 0;
      &.active {
        background-color: $neon-carrot;
      }
    }
  }
}
</style>

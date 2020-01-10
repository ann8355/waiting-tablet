<template>
  <div class="content">
    <wpt-button @click="create" class="redBtn btn">{{$t('common.create_batch')}}</wpt-button>
    <wpt-button @click="reset" class="grayBtn btn">{{$t('common.reset_batch')}}</wpt-button>
    <Modal :ref="name" :title="title" :name="name" @confirm="onConfirm" @close="closeModal"></Modal>
  </div>
</template>

<script>
// import Service from '@/services/index';
import i18n from '@/plugins/i18n';
import Modal from '@/components/ConfirmModal';

export default {
  name: 'Setting',
  data() {
    return {
      title: '',
      name: 'settingModal',
      path: '',
    };
  },
  components: {
    Modal,
  },
  methods: {
    create() {
      this.title = i18n.t('common.create_batch') + i18n.t('common.confirm');
      this.path = 'create';
      this.$refs.settingModal.show();
    },
    reset() {
      this.title = i18n.t('common.reset_batch') + i18n.t('common.confirm');
      this.path = 'reset';
      this.$refs.settingModal.show();
    },
    onConfirm() {
      this.$refs.settingModal.close();
      switch (this.path) {
        case 'create':
          // Service.newBatches().then(() => {
          // });
          break;
        case 'reset':
          // Service.incBatches().then(() => {
          // });
          break;
        default:
      }
    },
    closeModal() {
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/base';

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: calc(100vh - 60vh);
  margin-top: 15%;
  .btn {
    width: 80%;
    height: 25%;
    font-size: $h5;
  }
  .redBtn {
    background-color: lighten( $secondary, 5% );
  }
  .grayBtn {
    background-color: lighten( $primary, 60% );
  }
}
</style>

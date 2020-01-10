<template>
  <div class="content">
    <div class="top">
      <CurrentWaiting :label="$t('common.current_waiting')" :num="waitingGroups.toString()" />
      <CurrentWaiting :label="$t('common.take_title')" :num="formatString(takeNum)" />
      <wpt-button @click="takeOrder" class="redBtn btn">{{$t('common.take')}}</wpt-button>
    </div>
    <Table :list="waitingList" @updateGroups="updateGroups" />
    <Modal :ref="waitName" :title="$t('common.confirm_title')" :name="waitName"
    @confirm="onConfirm" @close="closeModal">
      <div class="modal-body">
        <Numselector :label="$t('common.total')" class="gap" @value="getTotal" />
        <GenderSeletor class="gap" @genderVal="genderVal"/>
        <Input :label="$t('common.name')" class="gap" :txtLimited="32" @value="getName"/>
        <span class="label">{{ nameVal }}</span>
        <Input :label="$t('common.phone')" :type="'number'" :txtLimited="10" @value="getPhone" />
      </div>
    </Modal>
  </div>
</template>

<script>
import CurrentWaiting from '@/components/CurrentWaiting';
import Table from '@/components/Table';
import Modal from '@/components/ConfirmModal';
import Numselector from '@/components/Numselector';
import Input from '@/components/Input';
import GenderSeletor from '@/components/GenderSeletor';
import Service from '@/services/index';

export default {
  name: 'TakeNum',
  data() {
    return {
      waitingList: [],
      waitName: 'waitingModal',
      nameVal: '先生',
      name: '',
      phone: '',
      total: 1,
      takeNum: 0,
      waitingGroups: 0,
    };
  },
  components: {
    CurrentWaiting,
    Table,
    Modal,
    Numselector,
    Input,
    GenderSeletor,
  },
  methods: {
    formatString(val) {
      const str = val.toString();
      return str.padStart(4, '0');
    },
    takeOrder() {
      this.$refs.waitingModal.show();
    },
    onConfirm() {
      // Service.createWaiting(this.total, this.name, this.phone).then((response) => {
      //   if (response.data.err === 0) {
      //     this.waitingList.push(response.data.msg.wait);
      //     this.takeNum = response.data.msg.wait.count + 1;
      //     this.waitingGroups += 1;
      //   }
      // });
      // 假資料
      this.takeNum = this.takeNum + 1;
      this.waitingList.push({
        count: this.takeNum,
        total: this.total,
        person: this.name,
        number: this.phone,
      });
      this.waitingGroups += 1;
      this.$refs.waitingModal.close();
      this.nameVal = '先生';
    },
    genderVal(val) {
      if (val === 2) {
        this.nameVal = '小姐';
      } else {
        this.nameVal = '先生';
      }
    },
    closeModal() {
      this.nameVal = '先生';
    },
    getName(val) {
      this.name = val;
    },
    getPhone(val) {
      this.phone = val;
    },
    getTotal(val) {
      this.total = val;
    },
    init() {
      const request = Service.getWaitings();
      request.then((response) => {
        this.waitingList = response.data.msg.waits || [];
        this.waitingGroups = response.data.msg.waits.length;
      });
    },
    getAllWaitings() {
      const request = Service.getAllWaits();
      request.then((response) => {
        this.takeNum = response.data.msg.waits.length + 1;// 下一個要取號的號碼
      });
    },
    updateGroups(val) {
      this.waitingGroups = val;
    },
  },
  created() {
    // this.init();
    // this.getAllWaitings();
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/base';

.top {
  display: flex;
  height: 18vw;
  justify-content: space-between;
  align-items: center;
  padding: 3vw 0;
  margin-bottom: 4vw;
  position: sticky;
  top: 0;
  background-color: $background;
  z-index: 10;
  box-shadow: 20vw 0 20px #fff;
}
.redBtn {
  width: 24%;
  height: 100%;
  // height: 60%;
  background-color: lighten( $secondary, 5% );
  font-size: $h5;
}
.gap {
  margin-bottom: 3%;
}
.modal-body {
  padding: 1.8rem 1rem 1rem 1rem;
  position: relative;
  .label {
    position: absolute;
    right: 2.5rem;
    top: 63%;
    color: lighten( $primary, 70% );
  }
}
</style>

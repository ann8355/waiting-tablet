<template>
  <div v-if="list">
    <table class="table">
      <thead>
        <tr>
          <th>{{ $t('common.order_number') }}</th>
          <th style="width:20%">{{ $t('common.order_people') }}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="list.length === 0"><td colspan="2">{{ $t('common.no_data') }}</td></tr>
        <tr v-for="(item,index) in list" :key="index">
          <td @click="openModal(item)">{{ formatString(item.count) }}</td>
          <td @click="openModal(item)">{{ item.total }}</td>
          <td class="center">
            <wpt-button class="yellow btn tableBtn" @click="arriveCheck(item)">
              {{$t('common.off')}}
            </wpt-button>
            <wpt-button class="gray btn tableBtn" @click="cancelCheck(item)">
              {{$t('common.cancel')}}
            </wpt-button>
          </td>
        </tr>
      </tbody>
    </table>
    <Modal :ref="arriveName" :title="`${$t('common.off_title')} ${formatString(selectItem.count)}`"
      :name="arriveName" @confirm="arriveConfirm(selectItem.code)">
    </Modal>
    <Modal :ref="cancelName" :title="`${$t('common.cancel')} ${formatString(selectItem.count)}`"
      :name="cancelName" @confirm="cancelConfirm(selectItem.code)">
    </Modal>
    <Modal :ref="infoName" :title="$t('common.detail_title')" :name="infoName" :btnComfirm="''">
      <div class="modal-body" v-if="selectItem">
        <ul>
          <li>
              <p>{{ $t('common.number') }}</p>
              <span>{{ formatString(selectItem.count) }}</span>
          </li>
          <li>
              <p>{{ $t('common.total') }}</p>
              <span>{{ `${selectItem.total}人` }}</span>
          </li>
          <li>
              <p>{{ $t('common.name') }}</p>
              <span>{{ selectItem.person }}</span>
          </li>
          <li>
              <p>{{ $t('common.phone') }}</p>
              <span>{{ selectItem.number }}</span>
          </li>
        </ul>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/ConfirmModal';
// import Service from '@/services/index';

export default {
  name: 'Table',
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {
      arriveName: 'arriveModal',
      infoName: 'detailModal',
      cancelName: 'cancelModal',
      selectItem: {},
    };
  },
  components: {
    Modal,
  },

  methods: {
    formatString(val) {
      if (val) {
        const str = val.toString();
        return str.padStart(4, '0');
      }
      return '';
    },
    delItem(code) {
      /* eslint-disable */
      const index = this.list.findIndex((item) => {
        return item.code === code;
      });
      this.list.splice(index, 1);
    },
    arriveCheck(item) {
      this.selectItem = item;
      this.$refs.arriveModal.show();
    },
    cancelCheck(item) {
      this.selectItem = item;
      this.$refs.cancelModal.show();
    },
    arriveConfirm(code) {
      // Service.arrive(code);
      this.init(code);
      this.$refs.arriveModal.close();
    },
    cancelConfirm(code) {
      // Service.cancelWaiting(code);
      this.init(code);
      this.$refs.cancelModal.close();
    },
    openModal(item) {
      this.selectItem = item;
      this.$refs.detailModal.show();
    },
    init(code) {
      // const request = Service.getWaitings();
      // request.then((response) => {
      //   this.delItem(code);
      //   this.$emit('updateGroups', response.data.msg.waits.length);
      // });
      this.delItem(code);
      this.$emit('updateGroups', this.list.length);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/base";

.table {
  border-radius: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  thead {
    background-color: lighten( $primary, 60% );
    color: $white;
    font-size: $h5;
    th {
      padding: .75rem;
      &:first-child {
        border-top-left-radius: 20px;
      }
      &:last-child {
        border-top-right-radius: 20px;
      }
    }
  }
  tbody {
    tr {
      td {
        text-align: center;
        vertical-align: middle;
        height: 12vw;
        font-size: $h3;
        color: lighten( $primary, 30% );
        border-right: 1px solid lighten( $primary, 80% );
        border-top: 1px solid lighten( $primary, 80% );
      }
      &:last-child td:first-child {
        border-bottom-left-radius: 20px;
      }
      &:last-child td:last-child {
        border-bottom-right-radius: 20px;
      }
    }
  }
}
.tableBtn {
  width: 40%;
  height: 80%;
  font-size: $h6;
}
.modal-body {
  padding: 1.8rem 1rem 1rem 1rem;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      width: 80%;
      height: 2.2em;
      line-height: 2.2em;
      font-size: $h6;
      color: darken( $red, 20% );
      &:not(:last-child) {
        border-bottom: 2px solid lighten( $primary, 80% );
      }
      p {
        display: inline-block;
        width: 40%;
        text-align: center;
        color: lighten( $primary, 40% );
        font-weight: 800;
      }
    }
  }
}
.center {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.yellow {
  background-color: $neon-carrot;
}
.gray {
  background-color: lighten( $primary, 77% );
}
</style>

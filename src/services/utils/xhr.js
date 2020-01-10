import _ from 'lodash';
import axios from 'axios';
import NetworkModal from '@/components/utils/network';
import i18n from '@/plugins/i18n';

const xhr = axios.create({
  timeout: 30000,
  validateStatus(status) {
    return status === 200;
  },
});

// Request interceptor
xhr.interceptors.request.use((config) => {
  // const Authorization = process.env.AUTHORIZATION;
  const APP = process.env.APP;
  const prset = {
    headers: {
      APP,
    },
  };
  return _.merge(config, prset);
}, error => Promise.reject(error));

// Response interceptor
xhr.interceptors.response.use(
  (response) => {
    if (response.data.err !== 0) {
      NetworkModal.show(i18n.t('common.dataError'));
    }
    return response;
  },
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.resolve();
    } else if (error.code === 'ECONNABORTED') {
      NetworkModal.show(i18n.t('common.networkError'));
    }
    return Promise.reject(error);
  },
);

export default xhr;

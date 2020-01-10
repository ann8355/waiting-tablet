import xhr from './utils/xhr';
import api from './utils/api';

export default {
  createWaiting(total, person, number) {
    const request = xhr.request({
      method: 'post',
      url: `${api.local}/api/waitings`,
      data: {
        total,
        person,
        number,
      },
    });
    return request;
  },
  getAllWaits() {
    const request = xhr.request({
      method: 'get',
      url: `${api.local}/api/waits`,
    });
    return request;
  },
  getWaitings() {
    const request = xhr.request({
      method: 'get',
      url: `${api.local}/api/waitings`,
    });
    return request;
  },
  cancelWaiting(code) {
    const request = xhr.request({
      method: 'patch',
      url: `${api.local}/api/waitings/${code}/deleted`,
    });
    return request;
  },
  arrive(code) {
    const request = xhr.request({
      method: 'patch',
      url: `${api.local}/api/waitings/${code}/arrived`,
    });
    return request;
  },
  newBatches() {
    const request = xhr.request({
      method: 'post',
      url: `${api.local}/api/batches/new`,
    });
    return request;
  },
  incBatches() {
    const request = xhr.request({
      method: 'post',
      url: `${api.local}/api/batches/inc`,
    });
    return request;
  },
};

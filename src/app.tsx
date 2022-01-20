import { runApp, IAppConfig, config } from 'ice';
import { codeMessage } from '@/utils';
import { message } from 'antd';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'browser',
  },
  request: {
    baseURL: config.baseURL,
    // 拦截器
    interceptors: {
      request: {
        onError: (error) => {
          return Promise.reject(error);
        },
      },
      response: {
        onConfig: (response) => {
          // 请求成功：可以做全局的 toast 展示，或者对 response 做一些格式化
          if (response?.data.code !== 0) {
            message.error(response.data.msg || '请求错误');
            return Promise.reject(response);
          }
          return response?.data;
        },
        onError: (error) => {
          const { status } = error?.response || {};
          const msg = status ? codeMessage[status] : '请求错误';
          message.destroy();
          message.error(msg);
          return Promise.reject(error);
        },
      },
    },
  },
};

runApp(appConfig);

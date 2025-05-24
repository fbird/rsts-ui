import { ElLoading } from 'element-plus';
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading';

let loadingInstance: LoadingInstance;
let requestCount = 0;

export const showLoading = () => {
  if (requestCount === 0) {
    loadingInstance = ElLoading.service({
      text: 'Loading..',
      target: '#app-main',
      background: 'rgba(12, 63, 115, 0)',
      fullscreen: false
    });
  }
  requestCount++;
};

export const hideLoading = () => {
  if (requestCount <= 0) return;
  requestCount--;
  if (requestCount === 0) {
    loadingInstance.close();
  }
};

import ajax from './AxiosService';

const API_URL = '';
const ApiService = function () {
  const MobileNumber = item => {
    return ajax.post(API_URL + '', item);
  };
  return {
    MobileNumber,
  };
};

export default ApiService();

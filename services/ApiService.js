import ajax from './AxiosService';

const API_URL = '';
const ApiService = function () {
  const MobileNumber = () => {
    return ajax.post(API_URL + '');
  };
  return {
    MobileNumber,
  };
};

export default ApiService();

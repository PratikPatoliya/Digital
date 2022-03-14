import ajax from './AxiosService';

const API_URL = '';
const ApiService = function () {
  const MobileNumber = params => {
    return ajax.post(API_URL + '', params, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  return {
    MobileNumber,
  };
};

export default ApiService();

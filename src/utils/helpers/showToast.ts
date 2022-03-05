import {ToastAndroid} from 'react-native';

const showToast = (message: string) => {
  ToastAndroid.show(message, 4000);
};

export {showToast};

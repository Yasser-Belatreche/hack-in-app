import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from '../Login.styles';

// components
import {Input} from '../../../../../components/Input/Input';
import {Button} from '../../../../../components/Button/ Button';

// system calls
import {AuthenticationMananger} from '../../../../../apis/AuthenticationManager';

// utils
import {showToast} from '../../../../../utils/helpers/showToast';
import {useNavigation} from '@react-navigation/native';
import {MainStackScreenProps} from '../../../../MainStack.types';

type EmailAndPassword = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const navigation =
    useNavigation<MainStackScreenProps<'AuthStack'>['navigation']>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginInfo, setLoginInfo] = useState<EmailAndPassword>({
    email: '',
    password: '',
  });

  const handleSubmit = async () => {
    const {email, password} = loginInfo;
    if (!email || !password) return;

    setIsLoading(true);
    AuthenticationMananger.login(email, password)
      .then(async (token: string) => {
        setIsLoading(false);
        await AsyncStorage.setItem('token', token);

        navigation.navigate('HomeStack');
      })
      .catch(() => {
        setIsLoading(false);
        showToast('Wrong Credentials, please try again');
      });
  };

  return (
    <>
      <View style={styles.inputsContainer}>
        <Input
          label="email adress"
          placeholder="email@example.com"
          setInputValues={setLoginInfo}
          name="email"
        />
        <Input
          label="Password"
          placeholder="********"
          name="password"
          setInputValues={setLoginInfo}
        />
      </View>

      <Button variant="primary" onPress={handleSubmit}>
        {isLoading ? <ActivityIndicator color={'white'} /> : 'Login'}
      </Button>
    </>
  );
};

export {LoginForm};

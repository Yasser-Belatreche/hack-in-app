import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {styles} from '../Signup.styles';

// components
import {Input} from '../../../../../components/Input/Input';
import {Button} from '../../../../../components/Button/ Button';

// system calls
import {AuthenticationMananger} from '../../../../../apis/AuthenticationManager';

// utils
import {showToast} from '../../../../../utils/helpers/showToast';
import {DropDown} from '../../../../../components/DropDown/DropDown';
import {MainStackScreenProps} from '../../../../MainStack.types';
import {useNavigation} from '@react-navigation/native';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

type SingupInfo = {
  name: string;
  email: string;
  password: string;
  sex: 'male' | 'female';
};

const SignupForm = () => {
  const navigation =
    useNavigation<MainStackScreenProps<'AuthStack'>['navigation']>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [signupInfo, setSignupInfo] = useState<SingupInfo>({
    name: '',
    email: '',
    password: '',
    sex: 'male',
  });

  const handleSubmit = async () => {
    if (!signupInfo) return;

    setIsLoading(true);
    AuthenticationMananger.signup(signupInfo)
      .then(async (token: string) => {
        setIsLoading(false);
        await AsyncStorageLib.setItem('token', token);

        navigation.navigate('HomeStack');
      })
      .catch(() => {
        setIsLoading(false);
        showToast(
          'Something went wrong, please try again (try to change the email)',
        );
      });
  };

  return (
    <>
      <View style={styles.inputsContainer}>
        <Input
          label="name"
          placeholder="John Smith"
          setInputValues={setSignupInfo}
          name="name"
        />
        <DropDown
          name="sex"
          setInputValues={setSignupInfo}
          selectedValue={signupInfo.sex}
          items={[
            {label: 'male', value: 'male'},
            {label: 'female', value: 'female'},
          ]}
        />
        <Input
          label="email adress"
          placeholder="email@example.com"
          setInputValues={setSignupInfo}
          name="email"
        />
        <Input
          label="Password"
          placeholder="********"
          name="password"
          setInputValues={setSignupInfo}
        />
      </View>

      <Button variant="primary" onPress={handleSubmit}>
        {isLoading ? <ActivityIndicator color={'white'} /> : 'Signup'}
      </Button>
    </>
  );
};

export {SignupForm};

import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

// styles
import {styles} from './LoginOrSignup.styles';

// utils
import {IMAGES} from '../../../../utils/constants/Images';

// components
import {Button} from '../../../../components/Button/ Button';

// types
import type {AuthStackScreenNavigation} from '../../AuthStack.types';

const LoginOrSignup: React.FC = () => {
  const navigation =
    useNavigation<AuthStackScreenNavigation<'LoginOrSignup'>>();

  return (
    <View style={styles.container}>
      <Image source={IMAGES.Logo} />

      <View style={styles.buttonsContainer}>
        <Button variant="primary" onPress={() => navigation.navigate('Login')}>
          Login
        </Button>
        <Button variant="primary" onPress={() => navigation.navigate('Signup')}>
          Signup
        </Button>
      </View>
    </View>
  );
};

export {LoginOrSignup};

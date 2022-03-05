import {View} from 'react-native';
import React from 'react';

// styles
import {styles} from './Login.styles';

// components
import {TopHead} from '../../../../components/TopHead/TopHead';
import {LoginForm} from './components/LoginForm';

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <>
      <TopHead title="Login" />

      <View style={styles.container}>
        <LoginForm />
      </View>
    </>
  );
};

export {Login};

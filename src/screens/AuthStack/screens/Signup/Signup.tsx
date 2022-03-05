import {ScrollView, View} from 'react-native';
import React from 'react';

// styles
import {styles} from './Signup.styles';

// components
import {TopHead} from '../../../../components/TopHead/TopHead';
import {SignupForm} from './components/SignupForm';

interface Props {}

const Signup: React.FC<Props> = () => {
  return (
    <ScrollView>
      <TopHead title="Signup" />

      <View style={styles.container}>
        <SignupForm />
      </View>
    </ScrollView>
  );
};

export {Signup};

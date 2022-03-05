import React from 'react';
import {View} from 'react-native';

// types
import {HomeStackScreenProps} from '../../HomeStack.types';
import {AddActivityButton} from './components/AddActivityButton';
import {TopHead} from './components/TopHead';

// styles
import {styles} from './Home.style';

interface Props extends HomeStackScreenProps<'Home'> {}

const Home: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <TopHead />
      <AddActivityButton />
    </View>
  );
};

export {Home};

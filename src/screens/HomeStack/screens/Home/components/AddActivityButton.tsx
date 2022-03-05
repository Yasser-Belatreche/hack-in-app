import {TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {styles} from '../Home.style';

import {COLORS} from '../../../../../theme/Colors';

import {Header} from '../../../../../components/Header/Header';

import {HomeStackNavigation} from '../../../HomeStack.types';

const AddActivityButton = () => {
  const navigation = useNavigation<HomeStackNavigation<'Home'>>();

  return (
    <TouchableHighlight
      style={styles.addActivityButton}
      underlayColor={`${COLORS.primary}cf`}
      onPress={() => navigation.navigate('AddActivity')}>
      <Header color="white" variant="h1">
        +
      </Header>
    </TouchableHighlight>
  );
};

export {AddActivityButton};

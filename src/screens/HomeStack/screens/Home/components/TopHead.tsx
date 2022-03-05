import {Image, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {styles} from '../Home.style';
import {IMAGES} from '../../../../../utils/constants/Images';
import {ICONS} from '../../../../../utils/constants/Icons';
import {HomeStackNavigation} from '../../../HomeStack.types';

const TopHead = () => {
  const navigation = useNavigation<HomeStackNavigation<'Notifications'>>();

  return (
    <View style={styles.topHead}>
      <Image source={IMAGES.LogoTitle} />

      <Pressable onPress={() => navigation.navigate('Notifications')}>
        <Image source={ICONS.Notification} />
      </Pressable>
    </View>
  );
};

export {TopHead};

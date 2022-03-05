import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// components
import {Header} from '../Header/Header';

// icons
import {ICONS} from '../../utils/constants/Icons';

// styles
import {styles} from './TopHeader.style';

interface Props {
  title: string;
}

const TopHead: React.FC<Props> = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={ICONS.BackArrow} />
      </Pressable>

      <Header
        variant="h3"
        color="blackShadeDarker"
        fontWeight="bold"
        style={{marginRight: 20}}>
        {title}
      </Header>
      <View />
    </View>
  );
};

export {TopHead};

import React from 'react';
import {StyleProp, TouchableHighlight} from 'react-native';

// components
import {Header} from '../Header/Header';

// styles
import {styles} from './Button.style';

interface Props {
  variant: 'primary' | 'secondary';
  onPress?: () => void;
}

const Button: React.FC<Props> = ({onPress, variant, children}) => {
  const customStyles: StyleProp<any> = {...styles[variant]};

  return (
    <TouchableHighlight
      style={customStyles}
      onPress={onPress}
      underlayColor={`${customStyles.backgroundColor}cf`}>
      <Header color="white" fontWeight="bold" variant="h4">
        {children}
      </Header>
    </TouchableHighlight>
  );
};

export {Button};

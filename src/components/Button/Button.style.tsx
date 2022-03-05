import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {COLORS} from '../../theme/Colors';

const globalStyle: StyleProp<ViewStyle> = {
  padding: 25,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 15,
  marginTop: 10,
};

const styles = StyleSheet.create({
  primary: {
    ...globalStyle,
    backgroundColor: COLORS.primary,
  },
  secondary: {
    ...globalStyle,
    backgroundColor: COLORS.secondary,
  },
});

export {styles};

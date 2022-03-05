import {StyleSheet} from 'react-native';
import {SPACINGS} from '../../theme/Spacings';

const FONTS = {
  regular: 'Product-Sans-Regular',
  bold: 'Product-Sans-Bold',
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: FONTS.bold,
    fontSize: SPACINGS.larger,
  },

  h2: {
    fontFamily: FONTS.bold,
    fontSize: SPACINGS.large,
  },

  h3: {
    fontFamily: FONTS.regular,
    fontSize: SPACINGS.xxl,
  },

  h4: {
    fontFamily: FONTS.regular,
    fontSize: SPACINGS.xl,
  },

  h5: {
    fontFamily: FONTS.regular,
    fontSize: 16,
  },

  h6: {
    fontFamily: FONTS.regular,
    fontSize: 14,
  },
});

export {styles, FONTS};

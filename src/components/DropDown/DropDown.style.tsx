import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: COLORS.blackShade,
    marginBottom: 20,
  },

  label: {
    marginBottom: 10,
    paddingLeft: 5,
  },
});

export {styles};

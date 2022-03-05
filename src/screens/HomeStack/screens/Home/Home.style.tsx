import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  topHead: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  addActivityButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: 30,
    right: 30,
    borderRadius: 35,
    backgroundColor: COLORS.primary,
  },
});

export {styles};

import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {},

  label: {
    marginBottom: 10,
    paddingLeft: 5,
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 10,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: COLORS.blackShade,
    marginBottom: 20,
  },

  input: {
    flex: 1,
  },

  multiline: {
    minHeight: 200,
  },
});

export {styles};

import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.brand,
    borderRadius: 48,
    bottom: 80,
    height: 48,
    justifyContent: 'center',
    position: 'absolute',
    right: 30,
    width: 48,
  },
});

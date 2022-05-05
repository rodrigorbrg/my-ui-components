import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.brand,
    borderRadius: 48,
    bottom: 80,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    right: 30,
    position: 'absolute',
    width: 48,
  },
});

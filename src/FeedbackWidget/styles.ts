import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.brand,
    borderRadius: 24,
    bottom: 16,
    height: 48,
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    width: 48,
  },
});

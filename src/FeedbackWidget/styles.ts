import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  button: {
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
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: 16,
  },
  handle: {
    backgroundColor: theme.colors.text_secondary,
    width: 56,
  },
});

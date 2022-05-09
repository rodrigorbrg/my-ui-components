import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.surface_primary,
    justifyContent: 'center',
  },
  image: {
    height: 36,
    width: 36,
    marginTop: 42,
    marginBottom: 10,
  },
  title: {
    color: theme.colors.text_primary,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    marginBottom: 56,
    paddingHorizontal: 24,
  },
  buttonTitle: {
    color: theme.colors.text_primary,
    fontSize: 14,
    textAlign: 'center',
  },
});

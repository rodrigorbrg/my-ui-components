import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface_primary,
  },
  title: {
    color: theme.colors.text_primary,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 32,
  },
  feedbackTypes: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 48,
    width: '100%',
  },
});

import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface_primary,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 16,
  },
  arrow: {
    marginStart: 16,
  },
  title: {
    flexDirection: 'row',
  },
  text: {
    color: theme.colors.text_primary,
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 8,
  },
  image: {
    height: 24,
    width: 24,
  },
  form: {
    backgroundColor: theme.colors.surface_primary,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    color: theme.colors.text_primary,
    fontSize: 14,
    marginHorizontal: 24,
    // textAlign: 'left',
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 8,
    paddingHorizontal: 24,
  },
});

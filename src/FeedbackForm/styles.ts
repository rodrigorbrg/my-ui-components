import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface_primary,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  arrow: {
    marginStart: 24,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 48,
  },
  image: {
    height: 24,
    width: 24,
  },
  title: {
    color: theme.colors.text_primary,
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 8,
  },
  form: {
    backgroundColor: theme.colors.surface_primary,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    borderRadius: 4,
    color: theme.colors.text_primary,
    fontSize: 14,
    height: 112,
    marginBottom: 8,
    marginHorizontal: 24,
    padding: 12,
    textAlignVertical: 'top',
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 8,
    paddingHorizontal: 24,
  },
});

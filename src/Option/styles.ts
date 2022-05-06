import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 8,
    height: 112,
    justifyContent: 'center',
    padding: 8,
    marginHorizontal: 8,
    width: 104,
  },
  image: {
    height: 40,
    width: 40,
  },
  title: {
    fontSize: 14,
    marginTop: 8,
    color: theme.colors.text_primary,
  },
});

import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 2,
    height: 40,
    justifyContent: 'center',
    marginEnd: 8,
    width: 40,
  },
  image: {
    height: 24,
    width: 24,
  },
  camera: {
    // position: 'absolute',
    // bottom: 1,
    // right: 1,
  },
});

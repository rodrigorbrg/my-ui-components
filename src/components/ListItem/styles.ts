import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flex: 1,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  avatar: {
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
  },
  genre: {
    flex: 1,
    fontSize: 14,
    textAlign: 'left',
    marginStart: 16,
  },
});

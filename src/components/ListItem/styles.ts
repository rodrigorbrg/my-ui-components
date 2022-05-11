import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    elevation: 4,
    flex: 1,
    flexDirection: 'row',
    height: 50,
    marginVertical: 1,
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

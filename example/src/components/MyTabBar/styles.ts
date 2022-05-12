import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'baseline',
    // borderRadius: 10,
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 16,
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 2,
  },
  firstTab: {
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    flex: 2,
  },
  middle: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 25,
    zIndex: 1,
    flex: 1,
    marginHorizontal: -14,
  },
  lastTab: {
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    flex: 2,
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 1,
  },
});

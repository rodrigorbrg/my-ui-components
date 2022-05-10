import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 8,
  },
  form: {
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 14,
    height: 112,
    marginBottom: 8,
    marginHorizontal: 24,
    padding: 12,
    textAlignVertical: 'top',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 8,
    paddingHorizontal: 24,
  },
  button: {
    flex: 1,
  },
});

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  touchableContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    flex: 5,
  },
  value: {
    flex: 5,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  buttonImage: {
    flex: 1,
    textAlign: 'right',
  },
  body: {
    padding: 0,
  }
})
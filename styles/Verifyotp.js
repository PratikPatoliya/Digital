/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  view1: {
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 160,
  },
  textheader: {
    fontSize: 25,
    fontWeight: '700',
    marginTop: height / 15,
    color: '#4e6dcc',
  },
  texttitle: {
    fontSize: 15,
    fontWeight: '100',
    marginTop: 5,
  },
  textnumber: {
    color: '#06a10e',
    fontWeight: '600',
  },
  textinputview: {
    flex: 1,
    flexDirection: 'row',
    marginTop: height / 15,
  },
  tochable: {
    height: 35,
    borderRadius: 7,
    backgroundColor: '#06a10e',
    justifyContent: 'center',
  },
  tochabletext: {
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: '600',
  },
  inputContainer :{
    flex: 0.1,
    fontSize: 15,
    borderWidth: 1,
    alignSelf: 'center',
    paddingTop: 10,
    height: 40,
    paddingLeft: 15,
    marginRight: 8,
  },
  inputContainer2:{
    flex: 0.1,
    fontSize: 15,
    borderWidth: 1,
    alignSelf: 'center',
    marginLeft: 8,
    paddingTop: 10,
    height: 40,
    paddingLeft: 15,
    marginRight: 8,
  },
  inputContainer3:{
    flex: 0.1,
    fontSize: 15,
    borderWidth: 1,
    alignSelf: 'center',
    marginLeft: 8,
    paddingTop: 10,
    height: 40,
    paddingLeft: 15,
  },
  inputContainer4:{
    flex: 0.1,
    fontSize: 15,
    borderWidth: 1,
    alignSelf: 'center',
    marginLeft: 8,
    paddingTop: 10,
    height: 40,
    paddingLeft: 15,
  },
  buttonContainer:{
    marginBottom: height / 3,
    width: width / 1.7,
    marginTop: height / 12,
  },
});
export default styles;

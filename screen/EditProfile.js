/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { Text, StyleSheet, View,TouchableOpacity,Image, Dimensions, TextInput } from 'react-native';
import colors from '../utils/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const EditProfile = () => {
  const [model, setModel] = useState(false);
  const [imageSource, setImageSource] = useState('https://www.clipartmax.com/png/middle/349-3496330_download-person-icon-orange-clipart-computer-icons-user-icon-orange-png.png');

  return (
    <View style={{backgroundColor:colors.black,height}}>
      <View style={{ alignItems: 'center', marginTop:height*0.35,  }}>
                        <TouchableOpacity onPress={() => setModel(true)}>
                            <Image source={{ uri: imageSource }} style={{ height: 120, width: 120, borderRadius: 100 }} />
                        </TouchableOpacity>
                        <View style={{top:20}}>
                        <TextInput style={{color:colors.white,borderColor:colors.white,borderWidth:1,width:width*0.70 ,borderRadius:5}}/>
                        </View>
                    </View>

    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({

});

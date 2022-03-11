import React, {useState} from 'react';
import {View, TouchableOpacity, Image, TextInput, Text} from 'react-native';
import styles from '../../styles/Profile';
import image from '../../utils/image';

const Profile = ({navigation}) => {
  const [model, setModel] = useState(false);
  const [nonestyle, setNonestyle] = useState(false);
  const [imageSource, setImageSource] = useState(image.userImage);

  const changeStyle = () => {
    setNonestyle(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <TouchableOpacity onPress={() => setModel(true)}>
          <Image source={{uri: imageSource}} style={styles.image} />
        </TouchableOpacity>
        <View style={{top: 20}}>
          <View style={styles.fieldSet1}>
            <Text style={styles.legend}> Enter Your Name </Text>
            <TextInput onFocus={changeStyle} style={styles.inputContainer} />
          </View>
        </View>
        <View style={{top: 40}}>
          <View style={styles.fieldSet1}>
            <Text style={styles.legend}> Enter Your Email </Text>
            <TextInput onFocus={changeStyle} style={styles.inputContainer} />
          </View>
        </View>
        <TouchableOpacity
          style={styles.tochable}
          onPress={() => navigation.navigate('AppStack')}
        >
          <Text style={styles.tochabletext}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

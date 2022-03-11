import React, {useState} from 'react';
import {View, TouchableOpacity, Image, TextInput, Text} from 'react-native';
import styles from '../styles/EditProfile';
import Header2 from '../components/Header2';
import image from '../utils/image';

const EditProfile = ({navigation}) => {
  const [model, setModel] = useState(false);
  const [nonestyle, setNonestyle] = useState(false);
  const [imageSource, setImageSource] = useState(image.userImage);

  const changeStyle = () => {
    setNonestyle(true);
  };
  return (
    <View style={styles.container}>
      <Header2
        inamel="chevron-back-outline"
        title="Edit Profile"
        isBack={() => navigation.goBack()}
        rightname="Save"
        isRightPress={() => navigation.navigate('Account1')}
      />
      <View style={styles.wrap}>
        <TouchableOpacity onPress={() => setModel(true)}>
          <Image source={{uri: imageSource}} style={styles.image} />
        </TouchableOpacity>
        <View style={{top: 20}}>
          <View style={nonestyle ? styles.fieldSet1 : styles.fieldSet}>
            <Text style={nonestyle ? styles.legend : styles.legend1}>
              {' '}
              Enter Your Name{' '}
            </Text>
            <TextInput onFocus={changeStyle} style={styles.inputContainer} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;

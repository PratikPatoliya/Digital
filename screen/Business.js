import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import styles from '../styles/Business';
import { FAB } from 'react-native-paper';
import CreateBusinesscategory from './CreateBusinesscategory';

const Business = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title=" My Business" />
      {/* <CreateBusinesscategory /> */}
        <FAB
          style={styles.Businessfdb}
          color={'#fff'}
          onPress={() => navigation.navigate('EditBusiness')}
          visible={true}
          size={40}
          icon="plus"
        />
    </View>
  );
};

export default Business;

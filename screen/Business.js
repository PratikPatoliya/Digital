import React from 'react';
import { ScrollView, View } from 'react-native';
import Header2 from '../components/Header2';
import styles from '../styles/Business';
import { FAB } from 'react-native-paper';
import CreateBusinesscategory from './CreateBusinesscategory';

const Business = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header2 title=" My Business" />
      <ScrollView>
        <CreateBusinesscategory />
      </ScrollView>
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

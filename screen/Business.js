import React,{useEffect} from 'react';
import { ScrollView, View } from 'react-native';
import Header2 from '../components/Header2';
import styles from '../styles/Business';
import { FAB } from 'react-native-paper';
import CreateBusinesscategory from './CreateBusinesscategory';
import { useSelector } from 'react-redux';

const Business = ({route, navigation }) => {
  // console.log("+++++++++++-",route.params.status);
  const status = route?.params?.status
  useEffect(() => {
    console.log("=-=--=-=-=--==-=-=-=-");
  }, [])
  
  return (
    <View style={styles.container}>
      <Header2 title=" My Business" />
      <ScrollView>
        <CreateBusinesscategory navigation={navigation} status={status}/>
      </ScrollView>
      <FAB
        style={styles.Businessfdb}
        color={'#fff'}
        onPress={() => navigation.navigate('EditBusiness') }
        visible={true}
        size={40}
        icon="plus"
      />
    </View>
  );
};

export default Business;

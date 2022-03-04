/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, View ,Linking} from 'react-native';
import { FAB } from 'react-native-paper';
import CatagoryImage from '../components/CategoryImage';
import Header from '../components/Header';
import Lable from '../components/Lable';
import styles from '../styles/Home';
import { img } from '../utils/Imgdata';


const Home = (props) => {
  const openWhatsApp = () => {
    let msg = 'demo';
    let mobile = 6352432738;
    if (mobile) {
      if (msg) {
        let url =
          'whatsapp://send?text=' +
          'demo' +
          '&phone=91' +
          6352432738;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened successfully ' + data);
          })
          .catch(() => {
            alert('Make sure WhatsApp installed on your device');
          });
      } else {
        alert('Please enter message to send');
      }
    } else {
      alert('Please enter mobile no');
    }
  };

  return (
    <View style={styles.homeBackground}>
      <Header title="Home"  {...props} />
      <ScrollView>
        <View style={styles.homeview}>
          {
            img && img.map((item) => {
              return (
                <>
                  <Lable title={item.header} view={item.view} onPress={() => props.navigation.navigate('Viewall', { itemdata: item.image, headername: item })} />
                  <CatagoryImage data={item.image} onPress={() => props.navigation.navigate('Frame', { id: item.image, img: item.image })} />
                </>
              );
            })
          }
        </View>
      </ScrollView>
      <FAB style={styles.homefdb} color={'#fff'} onPress={openWhatsApp} visible={true} size={40} icon="whatsapp" />
    </View>
  );
};

export default Home;


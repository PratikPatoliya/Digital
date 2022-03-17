import React, { useEffect } from 'react';
import { ScrollView, View, Linking, Text } from 'react-native';
import { FAB } from 'react-native-paper';
import CatagoryImage from '../components/CategoryImage';
import Header from '../components/Header';
import Lable from '../components/Lable';
import styles from '../styles/Home';
import { img123 } from '../utils/Imgdata';
import { useRoute } from '@react-navigation/native';
import HomeSlider from '../components/HomeSlider';
import { homeapidata } from '../redux/action/Home.action';
import { useDispatch, useSelector } from 'react-redux';
const Home = props => {
  const route = useRoute();

  const homedata = useSelector(state => state.homeReducer?.homeData)
  console.log("homedata", homedata);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(homeapidata())
  }, [dispatch])

  const openWhatsApp = () => {
    let msg = 'demo';
    let mobile = 6352432738;
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + 'demo' + '&phone=91' + 6352432738;
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
      <Header title="Home" {...props} />
      <ScrollView>
        <HomeSlider />
          <View style={styles.homeview}>
            {img123 && img123.map(item => {
                return (
                  <>
                    <Lable
                      title={item.header}
                      view="View All"
                      onPress={() =>
                        props.navigation.navigate('Viewall', {
                          itemdata: item.image,
                          headername: item,
                          screenName: route.name,
                        })
                      }
                    />
                    <CatagoryImage
                      data={item.image}
                      onPress={() =>
                        props.navigation.navigate('Frame', {
                          id: item.image,
                          img: item.image,
                          routeName: route.name,
                        })
                      }
                    />
                  </>
                );
              })}
          </View>
      </ScrollView>
      <FAB
        style={styles.homefdb}
        color={'#fff'}
        onPress={openWhatsApp}
        visible={true}
        size={40}
        icon="whatsapp"
      />
    </View>
  );
};

export default Home;

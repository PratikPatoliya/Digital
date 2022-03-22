import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Linking, Text, BackHandler } from 'react-native';
import { FAB } from 'react-native-paper';
import CatagoryImage from '../components/CategoryImage';
import Header from '../components/Header';
import Lable from '../components/Lable';
import styles from '../styles/Home';
import { img123 } from '../utils/Imgdata';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import HomeSlider from '../components/HomeSlider';
import { homeapidata } from '../redux/action/Home.action';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';

const Home = props => {
  const route = useRoute();
  const [backPressedCount, setBackPressedCount] = useState(0);
  const dispatch = useDispatch();

  const homedata = useSelector(state => state?.homeReducer?.homeData)

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', () => {
        setBackPressedCount(backPressedCount => backPressedCount + 1);
        return true;
      });
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', () => true);
    }, []),
  );
  useEffect(() => {
    dispatch(homeapidata());
    if (backPressedCount === 1) {
      Toast.show('Double tap to exit!');
    } else if (backPressedCount === 2) {
      BackHandler.exitApp();
    }
  }, [dispatch, backPressedCount]);
  /* whattsapp  function */
  const openWhatsApp = () => {
    let msg = 'Welcome to Your App';
    let mobile = 6352432738;
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=91' + mobile;
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
          {img123 &&
            img123.map(item => {
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

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
import { homeapidata, homeapidataimg } from '../redux/action/Home.action';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = props => {
  const route = useRoute();
  const dispatch = useDispatch();
  const [backPressedCount, setBackPressedCount] = useState(0);
  const [images, setImages] = useState([]);
  const homeData = useSelector(state => state?.homeReducer?.homeData)
  const homeDataImage = useSelector(state => state?.homeReducer?.homeDataImage)
  // const token = useSelector(state =>console.log("token",state.loginReducer))
  // console.log("1234",AsyncStorage.getItem('userToken'));

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
  const changeHandler = () => {
    if (homeDataImage && homeDataImage.length >= 0 && homeData && homeDataImage.length >= 0) {
      const dummyData = homeData?.map(element => {
        const data = homeDataImage?.filter((item) => item.header_id == element._id)
        element.image.push(data)
        return element
      });
      setImages(dummyData)
    }
  }
  useEffect(() => {
    dispatch(homeapidata());
    dispatch(homeapidataimg())
    if (backPressedCount === 1) {
      Toast.show('Double tap to exit!');
    } else if (backPressedCount === 2) {
      BackHandler.exitApp();
    }
  }, [dispatch, backPressedCount]);
  useEffect(() => {
    if (homeData && homeData.length > 0 && homeDataImage && homeDataImage.length > 0) {
      changeHandler()
    }
  }, [homeData, homeDataImage])

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
          {images &&
            images.map(item => {
              return (
                <>
                  <Lable
                    title={item && item.header}
                    view="View All"
                    onPress={() =>
                      props.navigation.navigate('Viewall', {
                        itemdata: item?.image[0],
                        headername: item,
                        screenName: route.name,
                      })
                    }
                  />
                  <CatagoryImage
                    data={item?.image && item?.image[0]}
                    onPress={() =>
                      props.navigation.navigate('Frame', {
                        id: item.image[0],
                        img: item.image[0],
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

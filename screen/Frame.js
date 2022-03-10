/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  FlatList,
  PermissionsAndroid,
} from 'react-native';
import Header2 from '../components/Header2';
import Eflatlist from '../components/Eflatlist';
import Share from 'react-native-share';
import styles from '../styles/Frame';
import RNFetchBlob from 'rn-fetch-blob';
import Editior from '../components/Editior';

const Frame = ({route, navigation}) => {
  const [imageSource, setImageSource] = useState(null);
  const categoryImage = route.params.img;
  const screenName = route.params.routeName;

  useEffect(() => {
    request_storage_runtime_permission();
  });
  const renderItem = ({item}) => {
    return (
      <View>
        <Image source={{uri: item.img}} style={styles.image} />
        {imageSource === null ? (
          <Text> Not Found Img</Text>
        ) : (
          <Image source={{uri: imageSource}} style={styles.insideimage} />
        )}
      </View>
    );
  };

  const myCustomerShare = async () => {
    const shareOption = {
      message: 'Hello',
    };
    try {
      const ShareResponse = await Share.open(shareOption);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  const downloadImage = () => {
    var date = new Date();
    var image_URL =
      'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg';
    var ext = getExtention(image_URL);
    ext = '.' + ext[0];
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        alert('Image Downloaded Successfully.');
      });
  };

  const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };
  const request_storage_runtime_permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Digital App Storage Permission',
          message:
            'Digital App needs access to your storage to download Photos.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.fview}>
      <Header2
        inamel="chevron-back-outline"
        title="Edit Frame"
        isBack={() => navigation.goBack()}
        inamer1="arrow-down-outline"
        inamer2="arrow-redo-outline"
        preasename2={myCustomerShare}
        isRightPress={downloadImage}
      />
      <ScrollView>
        <View style={styles.topmargin}>
          <Eflatlist />
          <View style={styles.flatelistview}>
            <FlatList
              data={categoryImage}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={{top: imageSource ? -22 : 43}}>
          {screenName === 'Home1' ? null : (
              <Editior
                imageSource={imageSource}
                setImageSource={setImageSource}
              />
          )}
           </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Frame;

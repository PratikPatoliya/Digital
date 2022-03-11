import React, {useState} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  Platform,
} from 'react-native';
import image from '../utils/image';
import styles from '../styles/Model';
import AndroidOpenSettings from 'react-native-android-open-settings';

const Model = () => {
  const [model, setModel] = useState(false);
  function wifiSetting() {
    Platform.OS === 'ios'
      ? Linking.openURL('App-Prefs:root=WIFI')
      : AndroidOpenSettings.wifiSettings();
  }

  function mobileSetting() {
    Platform.OS === 'ios'
      ? Linking.openSettings()
      : AndroidOpenSettings.generalSettings();
  }
  return (
    <View style={styles.view1}>
      <Modal transparent={true} visible={!model}>
        <View style={styles.modalview}>
          <View style={styles.modalview2}>
            <View style={styles.modalview3}>
              <Image
                style={styles.modalimg}
                source={{uri: image.internetConnection}}
              />
            </View>
            <View style={styles.modalheaderview}>
              <Text style={styles.modalheadertext}>NO INTERNET</Text>
            </View>
            <View style={styles.modaltitleview}>
              <Text style={styles.modaltitletext}>
                Check your internet connection and try again.
              </Text>
            </View>
            <View style={styles.modalwarningview}>
              <Text style={styles.modalwarningtext}>PLEASE TURN ON</Text>
            </View>
            <View style={styles.modalbtnview}>
              <TouchableOpacity
                onPress={() => wifiSetting()}
                style={styles.modalbuttouchable}>
                <Text style={styles.modalbuttouchabletext}>Wifi</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => mobileSetting()}
                style={[
                  styles.modalbuttouchable,
                  styles.modalbuttouchablemobiledata,
                ]}>
                <Text style={styles.modalbuttouchabletext}>Mobile data</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View>
        <TouchableOpacity onPress={() => setModel(!model)}>
          <Text style={styles.showbtm}>Show</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Model;

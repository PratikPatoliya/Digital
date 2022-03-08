/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, Image, Linking } from 'react-native';
import image from '../utils/image';
import styles from '../styles/Model';
import { useNetInfo } from '@react-native-community/netinfo';

const Model = () => {
    const netinfo = useNetInfo();
    const [model, setModel] = useState(!netinfo.isConnected);

    const mobile = () => {
        Linking.openSettings();
        setModel(netinfo.isConnected);
    }
    console.log("netinfo", netinfo);
    console.log("isWifiEnabled", netinfo.isWifiEnabled);
    console.log("isConnected", netinfo.isConnected);
    return (
        <View style={styles.view1}>
            <Modal transparent={true} visible={!model}>
                <View style={styles.modalview}>
                    <View style={styles.modalview2}>
                        <View style={styles.modalview3}>
                            <Image
                                style={styles.modalimg}
                                source={{ uri: image.internetConnection }}
                            />
                        </View>
                        <View style={styles.modalheaderview}>
                            <Text style={styles.modalheadertext}>NO INTERNET</Text>
                        </View>
                        <View style={styles.modaltitleview}>
                            <Text style={styles.modaltitletext}>Check your internet connection and try again.</Text>
                        </View>
                        <View style={styles.modalwarningview}>
                            <Text style={styles.modalwarningtext}>PLEASE TURN ON</Text>
                        </View>
                        <View style={styles.modalbtnview}>
                            <TouchableOpacity onPress={() => setModel(true)} style={styles.modalbuttouchable}>
                                <Text style={styles.modalbuttouchabletext}>Wifi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={mobile} style={[styles.modalbuttouchable, styles.modalbuttouchablemobiledata]}>
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


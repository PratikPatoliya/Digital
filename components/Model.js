/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, Image } from 'react-native';
import image from '../utils/image';
import styles from '../styles/Model';


const Model = () => {
    const [model, setModel] = useState(false);
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
                                {/* <Icon name='wifi-outline' size={20}/> */}
                                <Text style={styles.modalbuttouchabletext}>Wifi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModel(true)} style={[styles.modalbuttouchable,styles.modalbuttouchablemobiledata]}>
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


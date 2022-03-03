/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import colors from '../utils/colors';

const { width } = Dimensions.get('window');
const height = width * 0.50;

const Model = (props) => {
    const [model, setModel] = useState(false);
    return (
        <View style={{justifyContent:'flex-end'}}>
            <Modal transparent={true} visible={!model}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: '#fff', padding: 20, width: width * 0.80, height: height * 2, borderRadius: 10 }}>
                        <View style={{ width: width * 0.7, height: height, marginBottom: height * 0.1 ,alignItems:'center' }}>
                            <Image
                                style={{ width: width * 0.50, height: 200 , resizeMode: 'stretch' }}
                                source={{ uri: 'https://www.tp24.it/resizer/resize.php?url=https://www.tp24.it/immagini_articoli/23-09-2015/1442985893-0-ponte-radio-da-record-per-tim-147-km-lampedusa-pantelleria.jpg&size=300x250c10' }}
                            />
                        </View>
                        <View style={{ marginBottom: height * 0.04, alignItems: 'center' }}>
                            <Text style={{ fontSize: 17, color:colors.black, fontWeight: '900' }}>NO INTERNET</Text>
                        </View>
                        <View style={{ marginBottom: height * 0.06 }}>
                            <Text style={{ fontSize: 14, textAlign: 'center', color: '#0f0f0f', fontWeight: '100' }}>Check your internet connection and try again.</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginBottom: height * 0.04 }}>
                            <Text style={{ fontSize: 14, fontWeight: '700', color: 'black' }}>PLEASE TURN ON</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => setModel(true)} style={{ backgroundColor: "#dbbc3d", alignItems: 'center', justifyContent: 'center', height: height * 0.18, borderRadius: 20, width: width * 0.18, }}>
                                {/* <Icon name='wifi-outline' size={20}/> */}
                                <Text style={{ alignItems: 'center', }}>Wifi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModel(true)} style={{ backgroundColor: "#dbbc3d", alignItems: 'center', justifyContent: 'center', height: height * 0.18, marginLeft: 20, borderRadius: 20, width: width * 0.28 }}>
                                <Text style={{ alignItems: 'center', }}>Mobile data</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View>
                <TouchableOpacity onPress={() => setModel(!model)}>
                    <Text style={{color:colors.white}}>Show</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Model;


import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header2 from '../components/Header2'
import axios from 'axios'
import colors from '../utils/colors'

const api = `https://jsonplaceholder.typicode.com/photos?_limit=20&_page=1`

const Demo = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState();
    const [refFlatList, setRefFlatList] = useState();
    // const data1 = data.data;
    useEffect(() => {
        getListPhoto();
        return () => {

        }
    }, [])

    const getListPhoto = () => {
        axios.get(api).then(res => setData(res.data)).catch(err => console.log("errDemo", err)).finally(() => setIsLoading(false))
    }

    const onClickItem = (item, index) => {
        setCurrentIndex(index)
        const newArrData = data && data.map((e, index) => {
            if (item.id == e.id) {
                return {
                    ...e,
                    selected: true
                }
            }
            return {
                ...e,
                selected: false
            }
        })
        setData(newArrData);
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ height: 160 }}>
                <TouchableOpacity onPress={() => onClickItem(item, index)} style={[styles.item, { marginTop: 11, height: 150, backgroundColor: item.selected ? colors.yellow : colors.white }]}>
                    <Image style={styles.image} source={{ uri: item.url }} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        )
    }

    const onScrollToItemSelected = () => {
        refFlatList.scrollToIndex({ animated: true, index: currentIndex });
    }

    const getItemLayout = (data, index) => {
        return { length: 160, offset: 160 * index, index }
    }

    return (
        <View>
            <Header2
                inamel="chevron-back-outline"
                title="demo"
                isBack={() => navigation.goBack()}
                isRightPress={() => navigation.goBack()}
            />

            <View style={styles.container}>
                {isLoading ? null : (

                    <View style={{ height: 550 }}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            style={{ height: 90, marginLeft: 8, marginRight: 8 }}
                            getItemLayout={getItemLayout}
                            keyExtractor={item => `key-${item.id}`}
                            ref={(ref) => setRefFlatList(ref)}
                        />
                    </View>
                )}
                <TouchableOpacity onPress={onScrollToItemSelected} style={styles.wrapButton}>
                    <Text style={styles.textFontSize}>Scroll To Item Selected </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Demo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapButton: {
        alignItems: 'center',
        marginHorizontal: 50,
        padding: 20,
        backgroundColor: colors.yellow,
        height: 70,
    },
    textFontSize: {
        height: 30,
        fontSize: 20,
        color: colors.black,
    },
    item: {
        height: 200,
        borderWidth: 0.5,
        padding: 8,
        borderRadius: 10,
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
})
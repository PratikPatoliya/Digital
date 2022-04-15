import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import image from '../utils/image';
console.log("image", image.userImage);

const dataarr = [
  { id: 1, name: "P1", color: "red", backgroundcolor: 'green' },
  { id: 2, name: "P2", color: "green", backgroundcolor: 'black' },
  { id: 3, name: "P3", color: "black", backgroundcolor: 'yello' },
  { id: 4, name: "P4", color: "blue", backgroundcolor: 'pink' },
  { id: 5, name: "P5", color: "#fff", backgroundcolor: 'red' },
]

const newarray = [
  { id: 1, name: "P1" },
  { id: 2, name: "P2" },
  { id: 3, name: "P3" },
  { id: 4, name: "P4" },
  { id: 5, name: "P5" }
]

const sumdata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = sumdata.reduce((a, b) => a + b);



const Demo = () => {
  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={{ height: 100, width: 300, backgroundColor: item.backgroundcolor, alignSelf: 'center' }}>
          <View style={{ backgroundColor: item.color, height: 80, top: 10, width: 30, borderBottomRightRadius: 100, borderTopRightRadius: 100 }}>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ height: 80, width: 70, bottom: 70, marginLeft: 50, }} />
            <Text style={{ alignSelf: 'center', bottom: 70 ,left:20}}>{item.name}</Text>
          </View>
        </View>
      </View>
    )
  }
  const datd = dataarr.filter(i => newarray.find(j => j.name == i.name))
  return (
    <View>
      <Text>Demo</Text>
      <FlatList data={datd} renderItem={renderItem} />
      <Text>{total}</Text>
    </View>
  )
}

export default Demo

const styles = StyleSheet.create({})



// import { FlatList, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Array = [
//   { id: 1, GameName: "volleyball", Username: "Pratik" },
//   { id: 2, GameName: "cricket", Username: "Piyush" },
//   { id: 3, GameName: "kho-kho", Username: "Gautam" },
//   { id: 4, GameName: "cricket", Username: "Pankaj" },
//   { id: 5, GameName: "volleyball", Username: "Jay" },
//   { id: 6, GameName: "cricket", Username: "Manish" },
//   { id: 7, GameName: "kho-kho", Username: "Dishant" },
//   { id: 8, GameName: "volleyball", Username: "Piyush" },
//   { id: 9, GameName: "kho-kho", Username: "Pratik" },
//   { id: 10, GameName: "volleyball", Username: "Dishant" },
// ]


// const number = [1,0,2,-5,10,-50,-1,90];
// const maxnum = Math.max(1,0,2,-5,10,-50,-1,90);
// console.log("maxnum",maxnum);
// number.sort(function(a, b){return b - a})
// number.reverse()

// for (let i = 0; i < number.length; i++) {
//   const element = number[i];
//   if (element >= 0) {
//     console.log("element",element);
//   }
// }

// console.log("number",number);

// console.log();
// const filterData = [];
// const postdata1 = (name) =>{
//   const d1 = Array.filter(i => i.Username = name);
//   console.log("postdata", d1);
//   filterData.push(d1)

// }
// postdata1()
// console.log("filterData",filterData);
// const Demo = () => {
//   const renderItem = ({ item, index }) => {
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         <Text style={{ flex: 1 }}>{index + 1}</Text>
//         <Text style={{ flex: 1 }}>{item.GameName}</Text>
//         <Text style={{ flex: 1 }}>{item.Username}</Text>
//       </View>
//     )
//   }
//   const postdata =Array.filter(i => i.GameName ==='volleyball');
//   console.log("postdata", postdata);
//   return (
//     <View>
//       <Text>Demo</Text>
//       <FlatList data={postdata} renderItem={renderItem} />
//     </View>
//   )
// }

// export default Demo;

// const styles = StyleSheet.create({})






// // import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// // import React, { useEffect, useState } from 'react'
// // import Header2 from '../components/Header2'
// // import axios from 'axios'
// // import colors from '../utils/colors'

// // const api = `https://jsonplaceholder.typicode.com/photos?_limit=20&_page=1`

// // const Demo = ({ navigation }) => {
// //     const [isLoading, setIsLoading] = useState(true)
// //     const [data, setData] = useState([]);
// //     const [currentIndex, setCurrentIndex] = useState();
// //     const [refFlatList, setRefFlatList] = useState();
// //     // const data1 = data.data;
// //     useEffect(() => {
// //         getListPhoto();
// //         return () => {

// //         }
// //     }, [])

// //     const getListPhoto = () => {
// //         axios.get(api).then(res => setData(res.data)).catch(err => console.log("errDemo", err)).finally(() => setIsLoading(false))
// //     }

// //     const onClickItem = (item, index) => {
// //         setCurrentIndex(index)
// //         const newArrData = data && data.map((e, index) => {
// //             if (item.id == e.id) {
// //                 return {
// //                     ...e,
// //                     selected: true
// //                 }
// //             }
// //             return {
// //                 ...e,
// //                 selected: false
// //             }
// //         })
// //         setData(newArrData);
// //     }

// //     const renderItem = ({ item, index }) => {
// //         return (
// //             <View style={{ height: 160 }}>
// //                 <TouchableOpacity onPress={() => onClickItem(item, index)} style={[styles.item, { marginTop: 11, height: 150, backgroundColor: item.selected ? colors.yellow : colors.white }]}>
// //                     <Image style={styles.image} source={{ uri: item.url }} resizeMode="contain" />
// //                 </TouchableOpacity>
// //             </View>
// //         )
// //     }

// //     const onScrollToItemSelected = () => {
// //         refFlatList.scrollToIndex({ animated: true, index: currentIndex });
// //     }

// //     const getItemLayout = (data, index) => {
// //         return { length: 160, offset: 160 * index, index }
// //     }

// //     return (
// //         <View>
// //             <Header2
// //                 inamel="chevron-back-outline"
// //                 title="demo"
// //                 isBack={() => navigation.goBack()}
// //                 isRightPress={() => navigation.goBack()}
// //             />

// //             <View style={styles.container}>
// //                 {isLoading ? null : (

// //                     <View style={{ height: 550 }}>
// //                         <FlatList
// //                             data={data}
// //                             renderItem={renderItem}
// //                             style={{ height: 90, marginLeft: 8, marginRight: 8 }}
// //                             getItemLayout={getItemLayout}
// //                             keyExtractor={item => `key-${item.id}`}
// //                             ref={(ref) => setRefFlatList(ref)}
// //                         />
// //                     </View>
// //                 )}
// //                 <TouchableOpacity onPress={onScrollToItemSelected} style={styles.wrapButton}>
// //                     <Text style={styles.textFontSize}>Scroll To Item Selected </Text>
// //                 </TouchableOpacity>
// //             </View>
// //         </View>
// //     )
// // }

// // export default Demo;

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //     },
// //     wrapButton: {
// //         alignItems: 'center',
// //         marginHorizontal: 50,
// //         padding: 20,
// //         backgroundColor: colors.yellow,
// //         height: 70,
// //     },
// //     textFontSize: {
// //         height: 30,
// //         fontSize: 20,
// //         color: colors.black,
// //     },
// //     item: {
// //         height: 200,
// //         borderWidth: 0.5,
// //         padding: 8,
// //         borderRadius: 10,
// //         justifyContent: 'center',
// //     },
// //     image: {
// //         width: 100,
// //         height: 100,
// //         borderRadius: 5,
// //     },
// // })
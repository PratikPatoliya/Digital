import React from 'react';
import {View, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from '../styles/Eflatlist';
const Data = [
  {
    id: 1,
    img: 'https://i.pinimg.com/originals/fa/91/74/fa91748fd7a73ff50cf638d4761df282.jpg',
  },
  {
    id: 2,
    img: 'https://play-lh.googleusercontent.com/--JH3ql4DPM291um4zSOK-pdlkcbt5kVw-0L98sud-78O340annEDge6L0U7Nbz3070',
  },
  {
    id: 3,
    img: 'https://i.pinimg.com/236x/5c/5f/f7/5c5ff73438b6abc2731921f70206cedb--good-morning-cards.jpg',
  },
  {
    id: 4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLChpFWR2DIo6XgfH6PoceTY_dny8CQxReA&usqp=CAU',
  },
  {
    id: 5,
    img: 'https://muskaanhindi.com/wp-content/uploads/2021/06/white-lily-morning-wish-693x1024.jpg',
  },
  {
    id: 6,
    img: 'https://www.pixtrends.com/wp-content/uploads/2020/08/single-white-flower-Good-Morning-images.jpg',
  },
];

const Eflatlist = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.Grig}>
        <TouchableOpacity>
          <Image source={{uri: item.img}} style={styles.tinyLogo} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.item}
        />
      </View>
    </View>
  );
};

export default Eflatlist;

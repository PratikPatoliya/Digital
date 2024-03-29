import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { bannerslider } from '../redux/action/Banner.action';

const width = Dimensions.get('window').width;


const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.photo }}
        style={styles.image}
      />
    </View>
  )
}
const HomeSlider = () => {
  const state = useSelector(state => state.bannerReducer?.bannerData)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(bannerslider())
  }, [dispatch])
  const isCarousel = useRef(null)
  return (
    <View>
      <Carousel
        loop={true}
        layoutCardOffset={0}
        ref={isCarousel}
        activeAnimationType='timing'
        autoplay={true}
        autoplayInterval={3000}
        autoplayDelay={2000}
        data={state}
        renderItem={CarouselCardItem}
        sliderWidth={width}
        itemWidth={width * .92}
        inactiveSlideShift={0}
      />
    </View>
  )
}

export default HomeSlider

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: width,
    shadowColor: "#000",
    alignSelf: 'center',
    marginBottom:10,
  },
  image: {
    borderRadius: 8,
    alignSelf: 'center',
    width: width * 0.9,
    height: 200,
  },
})
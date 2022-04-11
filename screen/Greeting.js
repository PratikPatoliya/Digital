import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Header2 from '../components/Header2';
import Lable from '../components/Lable';
import CatagoryImage from '../components/CategoryImage';
import { gimg } from '../utils/GimgData';
import colors from '../utils/colors';
import styles from '../styles/Greeting';
import { greetingApiData, greetingApiDataImage } from '../redux/action/Greeting.action';
import { useDispatch, useSelector } from 'react-redux';

const Greeting = props => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const greetingData = useSelector(state => state?.greetingReducer?.greetingData);
  const greetingDataImage = useSelector(state => state?.greetingReducer?.greetingDataImage);

  const changeHandler = () => {
    if (greetingDataImage && greetingDataImage.length >= 0 && greetingData && greetingData.length >= 0) {
      const dummyData = greetingData?.map(element => {
        const data = greetingDataImage?.filter((item) => item.header_id == element._id)
        element.image.push(data)
        return element
      });
      setImages(dummyData)
    }
  }
  useEffect(() => {
    if (greetingData && greetingData.length > 0 && greetingDataImage && greetingDataImage.length > 0) {
      changeHandler()
    }
  }, [greetingData, greetingDataImage])
  useEffect(() => {
    dispatch(greetingApiData());
    dispatch(greetingApiDataImage());
  }, [dispatch])
  return (
    <View style={{ backgroundColor: colors.black }}>
      <Header2 title="Greetings" />
      <ScrollView>
        <View style={styles.container}>
          {images &&
            images.map(item => {
              return (
                <>
                  <Lable
                    title={item.header}
                    view='View All'
                    onPress={() =>
                      props.navigation.navigate('Viewall', {
                        itemdata: item.image[0],
                        headername: item,
                      })
                    }
                  />
                  <CatagoryImage
                    data={item.image && item.image[0]}
                    onPress={(index) =>
                      props.navigation.navigate('Frame', {
                        id: item.image[0],
                        img: item.image[0],
                        selIndex: index
                      })
                    }
                  />
                </>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Greeting;

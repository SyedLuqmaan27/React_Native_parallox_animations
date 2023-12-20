import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const SliderPage = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide}>
        <Text style={styles.text}>Page 1</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Page 2</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Page 3</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6347',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SliderPage;

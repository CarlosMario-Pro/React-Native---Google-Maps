import React, { useLayoutEffect } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import image from '../../../assets/traveler.png';
import styles from './HomeScreen.module.js';
import { Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { height } = Dimensions.get('window');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  return (
    <SafeAreaView style={[styles.container, { height: height }]}>
      {/* First section */}
      <View style={styles.container1}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>Go</Text>
        </View>
        <Text style={styles.text}>Travel</Text>
      </View>

      {/* Second section */}
      <View style={styles.container2}>
        <Text style={styles.text2}>Enjoy the trip with</Text>
        <Text style={styles.text3}>Good Moments</Text>
      </View>
      <Text style={styles.textLorem}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </Text>

      {/* Second section */}
      <View style={styles.draw}></View>
      <View style={styles.draw2}></View>
      
      {/* Second section */}
      <View style={styles.traveler}>
        <Animatable.Image
          animation="pulse"
          easing="ease-in-out"
          source={image}
          style={styles.image}
        />
      </View>

      {/* Second section */}
      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Discover')}
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            style={styles.button}>
            <Text style={styles.textButton}>Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
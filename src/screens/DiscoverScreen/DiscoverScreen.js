import React, { useLayoutEffect } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Avatar from '../../../assets/avatar.png';
import styles from './DiscoverScreen.module.js';

const DiscoverScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  return (    
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <View>
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.text}>the beauty today</Text>
        </View>

        <View style={styles.imagePerfil}>
          <Image
            source={Avatar}
            style={styles.avatar}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DiscoverScreen;
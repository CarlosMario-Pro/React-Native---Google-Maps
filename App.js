import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import DiscoverScreen from './src/screens/DiscoverScreen/DiscoverScreen';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView,Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

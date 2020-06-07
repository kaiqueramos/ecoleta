import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { AppLoading } from 'expo'
import { useFonts, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu'
import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'
import Routes from './src/routes'


const App = () => {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
    Roboto_500Medium
  })
    if(!fontsLoaded){
      return <AppLoading/>
    }
    return(
      <>
        <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent/>
        <Routes />
      </>
    )
}
export default App
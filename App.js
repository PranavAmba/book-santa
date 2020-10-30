import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Login from './screens/loginScreen.js'
import Donate from './screens/donateScreen.js'
import Request from './screens/requestScreen.js'

export default class App extends React.Component {
  render(){
  return (
    <AppContainer></AppContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  Request:Request,
  Donate:Donate
})

const SwitchNavigator = createSwitchNavigator({
  Login:Login,
  Tab:TabNavigator
})

const AppContainer = createAppContainer(SwitchNavigator)
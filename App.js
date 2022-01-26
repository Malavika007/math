
import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native'
import HomeScreen from './screens/HomeScreen';
import MathScreen from './screens/MathScreen';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
       <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  MathScreen:MathScreen
});

const AppContainer = createAppContainer(AppNavigator);

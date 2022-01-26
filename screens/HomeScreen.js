import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,ImageBackground } from 'react-native'


export default class HomeScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
       
        <Text>PURE MATH</Text>
       
        <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('MathScreen')}}>Go</TouchableOpacity>
      
      </View>
    );
  }
}



const styles = StyleSheet.create({
  button:{
    margin:100,
    borderWidth:2,
    width:50,
    height:30,
    alignSelf:'center',
    backgroundColor:'#536DFE',
    color:'#fff',
    borderRadius:3,
    textAlign:'center'
  },
  container: {
    backgroundColor:'#fff',
    width:window.innerWidth,
    height:window.innerHeight,
    textAlign:'center'
  },
  image: {
   alignSelf:"center",
    justifyContent: "center",
    resizeMode:"cover",
    width:window.innerWidth,
    height:window.innerHeight
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

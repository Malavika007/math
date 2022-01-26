import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import { useState } from 'react';


export default class MathScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      num1:null,
      num2:null,
      sum:null,
      d1:null,
      d2:null,
      difference:null

    };
  }
  render(){
    const sum = this.state.num1 && this.state.num2 ? this.state.num1+this.state.num2 :null;
    const difference = this.state.d1 && this.state.d2 ? this.state.d1-this.state.d2  :null;
    return (
     <View>
       <View style={styles.container}>
        <Text >Pure math</Text>
       <TextInput style={styles.inputBox} onChangeText={(text) => this.setState({num1: parseInt(text)})}></TextInput>
        <Text>+</Text>
       <TextInput style={styles.inputBox} onChangeText={(text) => this.setState({num2: parseInt(text)}) }></TextInput>
       <Text>{sum}</Text> 
       </View>
       <Text>.........................................................</Text>

       <View style={styles.container}>
       <TextInput style={styles.inputBox} onChangeText={(text) => this.setState({d1: parseInt(text)})}></TextInput>
       <Text>-</Text>
       <TextInput style={styles.inputBox} onChangeText={(text) => this.setState({d2: parseInt(text)})}></TextInput>
       <Text>{difference}</Text>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('HomeScreen')}}>Back</TouchableOpacity>
        </View>
        </View>
    );
  
  }
}
 
  
 




const styles = StyleSheet.create({
  inputBox: {
    borderWidth:'2px',
    width:'100px',
    height:'50px',
    borderRadius:5,
    borderColor:'#fff'

  },
  container: {
    backgroundColor:'#536DFE',
    borderRadius:15,
    flex:2
  }
})
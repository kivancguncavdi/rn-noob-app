import React, { Component } from "react";
import { Image, StyleSheet, Button, Text, View } from "react-native";
import UserInput from './Login.js'

class ButtonCounter extends Component {
  state = { counter: 0 };
  
  render() {
    return (
      <View style={{ marginTop: 10, width: 100 }}>
        <Button color="limegreen"
          onPress={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
          /*title= { this.state.counter==10 ? "Jackpot!" : `${this.state.counter}` }*/
          title= "LOGIN"
        />
      </View>
    );
  }
}

class Cafe extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#4267B2', flex: 1, alignItems:'center', justifyContent: 'center'}}>
        <Image resizeMode='contain' style={{width:150, height: 75}} source={require('./facebook.png')}/>
        <UserInput inputType='Username'/>
        <UserInput inputType='Password'/>
        <ButtonCounter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4267B2'
  },
  button: {

  },
  textInput: {

  }
})

export default Cafe;
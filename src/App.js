import React, { Component } from "react";
import { Image, View } from "react-native";
import UserInput from './UserInput.js'
import styles from './Styles.js'
import LoginButton from './Button.js'

const FBOOK_LOGO_PATH = '../img/facebook.png'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image resizeMode='contain' style={styles.fbLogo} source={require(FBOOK_LOGO_PATH)}/>
        <UserInput inputText='Username'/>
        <UserInput inputText='Password' keyType='numeric'/>
        <LoginButton />
      </View>
    );
  }
}

export default App;
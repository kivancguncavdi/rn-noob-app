import React, { Component } from "react";
import { Button, View, Alert } from "react-native";
import styles from './Styles.js'

class LoginButton extends Component {
    state = { counter: 0 };
    alertBox() {
        Alert.alert(
            'Login Succesful!',
            'Touch OK to continue',
            [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
             },
             {  text: 'OK', 
                onPress: () => console.log('OK Pressed') 
            }],
            { cancelable: true }
            );
    }
    
    render() {
      return (
        <View style={styles.loginButton}>
          <Button color="limegreen"
            onPress={() => { this.alertBox(); }}
            /*title= { this.state.counter==10 ? "Jackpot!" : `${this.state.counter}` }*/
            title= "LOGIN"
          />
        </View>
      );
    }
  }

export default LoginButton;
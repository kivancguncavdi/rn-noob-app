import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './Styles';

const UserInput = (props) => {
    return(
        <View style={{marginBottom: 10}}>
            <TextInput
                style={styles.authTextInput}
                placeholder={props.inputText}
                keyboardType={props.keyType}
            />
        </View>
    );
}

export default UserInput;
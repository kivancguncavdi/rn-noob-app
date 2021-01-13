import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const UserInput = ({inputType}) => {
    return(
        <View style={{marginBottom: 10}}>
            <TextInput
                style={{backgroundColor: '#FFF', padding: 5, height:40, width: 200, 
                    borderTopWidth:1, borderBottomWidth:1, borderLeftWidth:1, borderRightWidth:1,
                    borderTopLeftRadius: 5, borderTopRightRadius:5, borderBottomLeftRadius: 5, borderBottomRightRadius: 5,
                    borderColor: 'gray'}}
                placeholder={inputType}
            />
        </View>
    );
}

export default UserInput;
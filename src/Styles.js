import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4267B2',
        flex: 1, 
        alignItems:'center',
        justifyContent: 'center'
    },
    loginButton: {
        marginTop: 10, 
        width: 100
      },
    authTextInput: {
        backgroundColor: '#FFFF', 
        padding: 5, 
        height:40, 
        width: 200, 
        borderTopWidth:1, 
        borderBottomWidth:1, 
        borderLeftWidth:1, 
        borderRightWidth:1,
        borderTopLeftRadius: 5, 
        borderTopRightRadius:5, 
        borderBottomLeftRadius: 5, 
        borderBottomRightRadius: 5,
        borderColor: 'gray'
    },
    fbLogo: {
        width:150, 
        height: 75
    }
  })

export default styles;
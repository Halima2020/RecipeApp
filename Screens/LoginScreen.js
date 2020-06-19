import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TextInput, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

class LoginScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
              <View>
                  <Text style={styles.userText}>
                      Welcome to the Recipe App!
                  </Text>
                  <TouchableOpacity style={styles.logoutBtn}>
                      <Text styles={styles.logoutBtnText}>Logout</Text>
                  </TouchableOpacity>
                  </View>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    dashboardWrapper: { },
    userText: {
        fontSize: 30,
        fontWeight: "bold",
        margin: 10
    },
    logoutBtn: {
        backgroundColor: '#ff6347',
        paddingVertical: 10,
        width: 100,
        alignSelf: "center"
    },
    logoutBtnText: {
        color: "#fff",
        textAlign:"center"
    }
})

export default LoginScreen;
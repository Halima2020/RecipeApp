import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TextInput, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import logo from '../assets/logo.png'; 
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

 class ProfileScreen extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            remember: false
        };
    }

    onChangeHandle(state, value){
        this.setState({
            [state]: value
        })
    }

    doLogin() {
      const { username, password } = this.state;
      const req = {
          "email": username,
          "password": password
      }
      axios.post("https://reqres.in/api/login", req)
      .then(
          res => {
            alert("Welcome to the Recipe App");
          },
          err => {
              alert("Username password is wrong");
          }
      )  
    }

    render(){
        const { username, password, loading } = this.state;
        return (
            <ScrollView >
           <View style={styles.container}>
           <Image source={logo} style={{ width: 125, height: 125, margin: 20}} />
              <TextInput style={styles.TextInput}
              onChangeText={(value) => this.onChangeHandle('username' , value)}
              placeholder="Email"
              value={username}
            />
            <TextInput style={styles.TextInput}
            onChangeText={(value) => this.onChangeHandle('password' , value)}
            secureTextEntry={true}
            placeholder="password"
            value={password}
            />
            <TouchableOpacity>
            <CheckBox
                        title='Remember Me'
                        center
                        checked={this.state.remember}
                        onPress={() => this.setState({remember: !this.state.remember})}
                        containerStyle={styles.formCheckbox}
                    />
        </TouchableOpacity>
             <Button buttonStyle={styles.button}
             title='Log In' 
             color='#ff6347'
             onPress={() => this.doLogin()}
             disabled={loading}
             /*onPress={() => alert('Welcome To the Recipe App!')}*/ />
        
          <Text style={styles.signupText}>Do not have an account yet?</Text>
          <TouchableOpacity onPress={() => alert('SignUp on the website')}>
              <Text style={styles.signupText}
              onPress={() => this.onChangeHandle}> Sign Up</Text>
              </TouchableOpacity>
            </View>
            </ScrollView>
          )
    }

  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 100,
      paddingBottom: 150,
      backgroundColor: '#fff',
      paddingLeft: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    TextInput: {
       padding:10, 
       borderColor: 'tomato',
       borderWidth: 1,
       borderRadius: 15,
       width: 320,
       margin:5
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
    },
    formCheckbox: {
        margin: 8,
        backgroundColor: null
    },
    view: {
      padding: 20,
      textAlign: 'center'
    }, 
    button: {
        backgroundColor: '#ff6347',
        margin: 15,
        
    },
    signupText: {
      alignItems:'flex-end',
      justifyContent :'center',
      paddingVertical:10,
      flexDirection:'row',
      fontSize: 16,
    },
  });

 export default ProfileScreen;
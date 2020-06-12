import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import logo from '../assets/logo.png'; 

 class ProfileScreen extends Component {
    /* constructor(props){
         super(props)
         this.state = {
             question: null,
             image: null,
             answer: null, 
             isLoading: false, 
            };
        this.onSearch = this.onSearch.bind(this);
    };
  
    /* onSearch() {
        this.setState({isLoading:true});
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=/${this.state.question}`, {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "3238d22cd5mshb9ac4435462de68p1eaed6jsn9d2ff6bfc7f7",
        }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({answer: data.answer});
            this.setState({isLoading:false});
        })
        .catch(err => {
        console.log(err);
        });
        
    } */

    render(){
        return (
            <ScrollView >
           <View style={styles.container}>
           <Image source={logo} style={{ width: 150, height: 150}} />
              <TextInput style={styles.TextInput}
              placeholder="Email"
            />
            <TextInput style={styles.TextInput}
              placeholder="password"
            />
             <Button buttonStyle={styles.button}
             title='Log In' 
             color='#ff6347'/>
          <Text style={styles.signupText}>Do not have an account yet?</Text>
					<TouchableOpacity><Text> Signup</Text></TouchableOpacity>
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
    view: {
      padding: 20,
      textAlign: 'center'
    }, 
    button: {
        backgroundColor: '#ff6347',
    },
    signupText: {
        flexGrow: 1,
      alignItems:'flex-end',
      justifyContent :'center',
      paddingVertical:16,
      flexDirection:'row'
    },
  });

 export default ProfileScreen;
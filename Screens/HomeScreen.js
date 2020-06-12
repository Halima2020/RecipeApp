import React,  { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TextInput, ScrollView } from 'react-native';
 class HomeScreen extends Component {
     constructor(props){
         super(props)
         this.state = {
             question: null,
             image: null,
             answer: null, 
             isLoading: false, 
            };
        this.onSearch = this.onSearch.bind(this);
    };
  
    onSearch() {
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
        
    }

    render(){
        if (this.state.isLoading) {
            return(
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } 
        return (
            <ScrollView>
           <View style={styles.container}>
              <TextInput style={styles.TextInput}
              value={this.state.question}
              placeholder="Quick Search"
             onChangeText={(question) => this.setState({question})}
             onSubmitEditing ={this.onSearch}
            />
            <View style={styles.view}>
                {this.state.answer !=  null && <Text>{this.state.answer}</Text>}
            </View>
            </View>
            </ScrollView>
          )
    }

  }


 const styles = StyleSheet.create({
     container: {
       flex: 1,
       paddingTop: 60,
       paddingBottom: 550,
       backgroundColor: '#fff',
     },
     TextInput: {
       padding:10, 
       borderColor: 'tomato',
       borderWidth: 1,
       borderRadius: 15,
       width: 400,
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
     }
   });

 export default HomeScreen;
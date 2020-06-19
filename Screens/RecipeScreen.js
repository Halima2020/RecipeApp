import React,  { Component } from 'react';
 import { View, Text, StyleSheet, ActivityIndicator, TextInput, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
 
 class RecipeScreen  extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: null,
            instructions: '',
            result : [],
            isLoading: false, 
           };
       this.onSearch = this.onSearch.bind(this);
   };
   
 
   onSearch() {
    const url = "";
       this.setState({isLoading:true});
       return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?q=/${this.state.result}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "3238d22cd5mshb9ac4435462de68p1eaed6jsn9d2ff6bfc7f7",
        }
       })
       .then(response => response.json())
       .then(data => {
        console.log(data);
           this.setState({result: data.results});
           this.setState({isLoading:false});
       })
       .catch(err => {
       console.log(err);
       });
       
   }

   openRecipe(recipe){ 

    const url = "";
    this.setState({isLoading:true});
    return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipe.id}/information`, {
"method": "GET",
"headers": {
"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
"x-rapidapi-key": "3238d22cd5mshb9ac4435462de68p1eaed6jsn9d2ff6bfc7f7"
    }
    })
    .then(response => response.json())  
.then(response => {
console.log(response.instructions);//Open new Stack Navigator screen and on that screen, show recipe
})
.catch(err => {
console.log(err);
});
   }
   

   renderItem = (result) => (
      <View style={styles.view}>
          <TouchableOpacity style={{borderWidth: 1}}
          onPress={() => this.openRecipe(result.item)}
        >
          <Image src = {result.item.image} />
          <Text>Title: {result.item.title}</Text>
          <Text>Time: {result.item.readyInMinutes}</Text>
          <Text>Servings: {result.item.servings}</Text>
          </TouchableOpacity>
          </View> 
          
   );
   
   render(instructions) {
    return (
       <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text>
             Instructions: {result.item.instructions} 
          </Text>
       </View>
    )
 }
   
   render (){
       console.log("result:", this.state.result);
       if (this.state.isLoading) {
           return(
               <View style={styles.container}>
                   <ActivityIndicator />
               </View>
           );
       } 
       else {
       return (
        <ScrollView>
          <View style={styles.container}>
             <TextInput style={styles.TextInput}
             value={this.state.search}
             placeholder="Search Recipes"
            onChangeText={(search) => this.setState({search})}
            onSubmitEditing ={this.onSearch}
           />
           <View>
        <FlatList 
         data = {this.state.result}
         renderItem ={this.renderItem}
         keyExtractor = {(result) => result.id}
        />
           </View>
           </View>
           </ScrollView>
         );
         
         }
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
       margin:5,
     },
     TextStyle: {
        fontSize: 20,
        color: '#000',
        textAlign: 'left'
      },
      view: {
        padding: 20,
        textAlign: 'center'
      }
   });

 export default RecipeScreen;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class RecipeScreen extends Component {
  ComponentDidMount(){
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%253F", {
"method": "GET",
"headers": {
"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
"x-rapidapi-key": "3238d22cd5mshb9ac4435462de68p1eaed6jsn9d2ff6bfc7f7",
}
})
.then(response => response.json())
.then(response => {
console.log(response);
})
.catch(err => { console.log(err);
});
  }
}
    return (
        <View styles={styles.container}>
            <Text>
                Recipe Screen
            </Text>
        </View>
    );


const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: '10',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default RecipeScreen;
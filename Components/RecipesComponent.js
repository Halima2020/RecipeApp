import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Recipes',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
        <Text style={{margin: 10}}>Details</Text>
        <Button 
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
          color='#f73d3d'
        />
      </View>
    );
  }
}

export default DetailsScreen;
import React, { Component } from 'react';
import { Button, StyleSheet, ScrollView, ActivityIndicator, Text, View  } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
        <Text style={{margin: 10}}>Home</Text>
        <Button
          title="Recipes"
          onPress={() => this.props.navigation.navigate('Recipes')}
          color='#f73d3d'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  activity: {
    flex: 1,
    padding: 20,
  }
})

export default HomeScreen;
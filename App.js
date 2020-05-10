import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}

function RecipeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Recipe</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={{ backgroundColor: '#605F60' }}>
      <Tab.Navigator screenOptions={({ route })  => ({
          tabBarIcon: ({ focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                  iconName = 'home' ;
              } else if (route.name === 'Recipe') {
                  iconName = 'list' ;
                }
                return <Icon name = {iconName} size = {size} color = {color}/>;
              },
        })}
            tabBarOptions = {{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
          }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Recipe" component={RecipeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
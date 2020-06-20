import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import RecipeScreen from './RecipeScreen';
import InstructionScreen from './InstructionScreen';

export default function RecipeNavigator()
{
    return (
      <Stack.Navigator>
        <Stack.Screen name="Recipe" component={RecipeScreen} />
        <Stack.Screen name="Instruction" component={InstructionScreen} />
      </Stack.Navigator>
    );
}
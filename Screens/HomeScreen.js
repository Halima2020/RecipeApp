import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen (props)
{
    return (
        <View styles={styles.container}>
            <Text>
                Home Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: '10',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen;
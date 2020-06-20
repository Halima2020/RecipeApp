import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TextInput, ScrollView, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

class InstructionScreen extends Component {
    constructor(props) {
        super(props);
        const receipeInstruction = props.route.params;
        this.state = {
            instructions: receipeInstruction.instructions,
            loggedInEmail: ""
        };
    };

    componentDidMount()
    {
        SecureStore.getItemAsync("currentUserEmail").then((currentEmail) =>
        {
            console.log("Current email is", currentEmail);
            if(currentEmail != "")
            {
                this.setState({loggedInEmail: currentEmail});
            }
        });
    }

    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Instructions
                </Text>
                <View>
                    <Text>{this.state.instructions}</Text>
                    {this.state.loggedInEmail != "" && 
                        <Button 
                        title="Add to favotites"
                        />
                    }
                </View>
            </View>
        );
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
        padding: 10,
        borderColor: 'tomato',
        borderWidth: 1,
        borderRadius: 15,
        width: 400,
        margin: 5,
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

export default InstructionScreen;
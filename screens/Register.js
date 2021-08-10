import React from 'react';
import { LogBox, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';

export default class Register extends React.Component {

    register = () => {
        fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then((response) => response.text())
            .then((responseJson) => {
                Alert.alert('Register Complete');
            })
            .catch((error) => {
                console.error(error);
            });

        this.props.navigation.navigate('Login');
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View>
                    <Text style={{ textAlign: 'center', alignItems: 'center', marginTop: 50, fontSize: 30, fontWeight: '500' }}>
                        Register
                    </Text>
                </View>

                <View style={{ alignSelf: 'flex-start', position: 'absolute', top: '8%', backgroundColor: "#FF0033" }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#000', fontSize: 20, fontWeight: '600', alignSelf: 'center' }} >Back</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ top: '5%', alignItems: 'center' }}>

                    <Image style={{ alignSelf: 'center', width: 160, height: 160, borderRadius: 15, marginTop: 5 }} source={require('../image/Human.png')} />

                    <TextInput
                        style={styles.input}
                        onChangeText={(email) => this.setState({ email })}
                        placeholder="   Username"
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder="   Password"
                    />

                </View>


                <View style={{ position: 'absolute', bottom: '8%', alignSelf: 'center' }}>
                    <TouchableOpacity style={styles.button} onPress={this.register}>
                        <Text style={{ color: '#fff', fontSize: 20, marginTop: 15, fontWeight: '700', alignSelf: 'center' }} >Register</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
};


const styles = StyleSheet.create({

    input: {
        height: 40,
        margin: 12,
        width: 300,
    },
    button: {
        width: Dimensions.get('window').width - 110,
        height: 60,
        backgroundColor: "#2077d6",
        borderRadius: 15,
        elevation: 10,
        shadowColor: '#2077d6',
        shadowOpacity: 0.4,
        shadowRadius: 15,
        alignSelf: 'center'
    },


});
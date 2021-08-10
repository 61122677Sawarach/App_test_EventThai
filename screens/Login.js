import React from 'react';
import { LogBox, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {

    state = {
        data: [],
        email: '',
        password: '',
    }

    fetchData = async () => {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const jsons = await response.json();
        this.setState({ data: jsons.data });
        console.log(data);

    }

    componentDidMount = () => {
        this.fetchData();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View>
                    <Text style={{ textAlign: 'center', alignItems: 'center', marginTop: 30, fontSize: 30, fontWeight: '500' }}>
                        Login
                    </Text>
                </View>

                <Image style={{ alignSelf: 'center', width: 300, height: 200, borderRadius: 15, top: '2%' }} source={require('../image/EventThai.jpg')} />

                <View style={{ top: '5%', alignItems: 'center' }}>

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
                
                <View style={{ height: 50, width: 300, top: '10%', alignSelf: 'center' }}>
                    
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                        <View>
                            { this.state.email == item.email && this.state.password == item.id ?
                            <Button
                                title='Login'
                                onPress={() => this.props.navigation.navigate('Home')}
                            />
                            : null }
                        </View>
                        }
                    />

                </View>

                <View style={{ position: 'absolute', bottom: '4%', alignSelf: 'center', flexDirection: 'row' }}>

                    <Text style={{ marginTop: 10, fontSize: 15 }}>
                        Don't have an account? 
                    </Text>

                    <Button
                        title='Signup here'
                        onPress={() => this.props.navigation.navigate('Register')}
                    />

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
});

import React from 'react';
import { LogBox, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';

export default class Detail extends React.Component {

  create = () => {
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        avatar: this.state.avatar,
      })
    })
    .then((response) => response.text())
    .then((responseJson) => {
      Alert.alert(responseJson);
      Alert.alert('Create User Complete');
    })
    .catch((error) => {
      console.error(error);
    });

    this.props.navigation.navigate('Home');
  };

  render() {

    return (
      <View style={{ flex: 1, backgroundColor: '#FFFAF0' }}>

        <View>
          <Text style={{ textAlign: 'center', alignItems: 'center', marginTop: 20, fontSize: 25, fontWeight: '500' }}>
            Create User
          </Text>
        </View>

        <View style={{ alignSelf: 'flex-start', position: 'absolute', top: '8%', backgroundColor: "#FF0033" }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#000', fontSize: 20, fontWeight: '600', alignSelf: 'center' }} >Back</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10 }}>

            <Text style={{ alignSelf: 'flex-start', marginTop: 30, marginLeft: 20, marginRight: 20, fontSize: 15 }}>ID: </Text>

            <View style={{ marginTop: 5, alignItems: 'center' }}>
              <TextInput
                style={{ height: 40, width: 350, backgroundColor: '#fff' }}
                placeholder='0-9'
                onChangeText={(id) => this.setState({ id })}
              />
            </View>


            <Text style={{ alignSelf: 'flex-start', marginTop: 10, marginLeft: 20, marginRight: 20, fontSize: 15 }}>E-mail: </Text>

            <View style={{ marginTop: 5, alignItems: 'center' }}>
              <TextInput
                style={{ height: 40, width: 350, backgroundColor: '#fff' }}
                placeholder='sawa*******@mail.wu.ac.th'
                onChangeText={(email) => this.setState({ email })}
              />
            </View>


            <Text style={{ alignSelf: 'flex-start', marginTop: 10, marginLeft: 20, marginRight: 20, fontSize: 15 }}>First Name: </Text>

            <View style={{ marginTop: 5, alignItems: 'center' }}>
              <TextInput
                style={{ height: 40, width: 350, backgroundColor: '#fff' }}
                placeholder='A-Z, a-z, ก-ฮ'
                onChangeText={(first) => this.setState({ first })}
              />
            </View>


            <Text style={{ alignSelf: 'flex-start', marginTop: 10, marginLeft: 20, marginRight: 20, fontSize: 15 }}>Last Name: </Text>

            <View style={{ marginTop: 5, alignItems: 'center' }}>
              <TextInput
                style={{ height: 40, width: 350, backgroundColor: '#fff' }}
                placeholder='A-Z, a-z, ก-ฮ'
                onChangeText={(last) => this.setState({ last })}
              />
            </View>


            <Text style={{ alignSelf: 'flex-start', marginTop: 10, marginLeft: 20, marginRight: 20, fontSize: 15 }}>Avatar: </Text>

            <View style={{ marginTop: 5, alignItems: 'center' }}>
              <TextInput
                style={{ height: 40, width: 350, backgroundColor: '#fff' }}
                placeholder='URL image'
                onChangeText={(avatar) => this.setState({ avatar })}
              />
            </View>


        </View>

        <View style={{ position: 'absolute', bottom: '8%', alignSelf: 'center' }}>
          <TouchableOpacity style={styles.button} onPress={this.create}>
            <Text style={{ color: '#fff', fontSize: 20, marginTop: 15, fontWeight: '700', alignSelf: 'center' }} >Create</Text>
          </TouchableOpacity>
        </View>



      </View>
    );
  }
};


const styles = StyleSheet.create({

  card: {
    marginLeft: 20,
    width: 350,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#B0BEC5',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    alignSelf: 'center',
    margin: 10
  },
  delete: {
    width: 120,
    height: 50,
    backgroundColor: "#d8534e",
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 20
  },
  button: {
    width: Dimensions.get('window').width - 110,
    height: 60,
    backgroundColor: "#75c971",
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#75c971',
    shadowOpacity: 0.4,
    shadowRadius: 15,
    alignSelf: 'center'
  },

});
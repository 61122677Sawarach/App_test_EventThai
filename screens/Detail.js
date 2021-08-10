import React from 'react';
import { LogBox, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';


export default class Detail extends React.Component {

  state = {
    data: [],
  }

  fetchData = async () => {
    const response = await fetch('https://reqres.in/api/users?page=2');
    const jsons = await response.json();
    this.setState({ data: jsons.data });

  }

  componentDidMount = () => {
    this.fetchData();
  }

  update = () => {
    fetch('https://reqres.in/api/users/2', {
      method: 'PUT',
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
      }),
    })

      .then((response) => response.text())
      .then((responseJson) => {
        Alert.alert('Update Complete');
      })
      .catch((error) => {
        console.error(error);
      });
      this.props.navigation.navigate('Home');
  };


  delete = () => {
    fetch('https://reqres.in/api/users/2', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
      }),
    })

      .then((response) => response.text())
      .then((responseJson) => {
        Alert.alert('Delete Complete');
      })
      .catch((error) => {
        console.error(error);
      });
      this.props.navigation.navigate('Home');
  };


  render() {

    const { id } = this.props.route.params

    return (
      <View style={{ flex: 1, backgroundColor: '#FFFAF0' }}>

        <View>
          <Text style={{ textAlign: 'center', alignItems: 'center', marginTop: 10, fontSize: 25, fontWeight: '500' }}>
            User Detail
          </Text>
        </View>

        <View style={{ alignSelf: 'flex-start', position: 'absolute', top: '8%', backgroundColor: "#FF0033" }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#000', fontSize: 20, fontWeight: '600', alignSelf: 'center' }} >Back</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.delete}>
          <TouchableOpacity onPress={this.delete}>
            <Text style={{ color: '#fff', fontSize: 15, fontWeight: '500', textAlign: 'center', marginTop: 10 }} >Delete</Text>
          </TouchableOpacity>
        </View>

        <View
        >

          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
              <View >
                {id == item.id ?

                  <View>

                    <Image style={{ alignSelf: 'center', marginTop: 30, width: 200, height: 150, borderRadius: 15, margin: 10 }} source={{ uri: item.avatar }} />

                    <View style={{ flexDirection: 'row', flex: 1 }}>

                      <Text style={{ alignSelf: 'center', marginTop: 10, marginLeft: 20, marginRight: 20 }}>Firse Name : </Text>

                      <View style={{ marginTop: 10, alignItems: 'flex-end' }}>
                        <TextInput
                          style={{ height: 40, width: 250, backgroundColor: '#fff' }}
                          onChangeText={(first_name) => this.setState({ first_name })}
                          defaultValue={item.first_name}
                        />
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>

                      <Text style={{ alignSelf: 'center', marginTop: 10, marginLeft: 20, marginRight: 20 }}>Last Name : </Text>

                      <View style={{ marginTop: 10, alignItems: 'flex-end' }}>
                        <TextInput
                          style={{ height: 40, width: 250, backgroundColor: '#fff' }}
                          onChangeText={(last_name) => this.setState({ last_name })}
                          defaultValue={item.last_name}
                        />
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>

                      <Text style={{ alignSelf: 'center', marginTop: 10, marginLeft: 20, marginRight: 20 }}>E-mail : </Text>

                      <View style={{ marginTop: 10, alignItems: 'flex-end' }}>
                        <TextInput
                          style={{ height: 40, width: 250, backgroundColor: '#fff' }}
                          onChangeText={(email) => this.setState({ email })}
                          defaultValue={item.email}
                        />
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>

                      <Text style={{ alignSelf: 'center', marginTop: 10, marginLeft: 20, marginRight: 20 }}>URL avatar : </Text>

                      <View style={{ marginTop: 10, alignItems: 'flex-end' }}>
                        <TextInput
                          style={{ height: 40, width: 250, backgroundColor: '#fff' }}
                          onChangeText={(avatar) => this.setState({ avatar })}
                          defaultValue={item.avatar}
                        />
                      </View>
                    </View>




                  </View>

                  : null}
              </View>
            }
          />


        </View>

        <View style={{ position: 'absolute', bottom: '8%', alignSelf: 'center' }}>
          <TouchableOpacity style={styles.button} onPress={this.update}>
            <Text style={{ color: '#fff', fontSize: 20, marginTop: 15, fontWeight: '700', alignSelf: 'center' }} >Update</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
};


const styles = StyleSheet.create({
  
  delete: {
    width: 100,
    height: 40,
    backgroundColor: "#d8534e",
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 5
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
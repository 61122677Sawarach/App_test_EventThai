import React from 'react';
import { LogBox,StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default class Home extends React.Component {

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


  render() { 
    return (
      <View style={{ flex: 1, backgroundColor: '#CCFFFF' }}>

        <View>
          <Text style={{ textAlign: 'center', alignItems: 'center', marginTop: 30, fontSize: 30, fontWeight: '500' }}>
            User List
          </Text>
        </View>

        <View style={styles.create}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Create')}>
            <Text style={{ color: '#fff', fontSize: 15, fontWeight: '500', textAlign: 'center', marginTop: 12 }} >Create User</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ marginTop: 30 }}>

          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
              <View >
                <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Detail', { id: item.id })}>

                  <View style={{ position: 'absolute', top: '8%', alignItems: 'center', margin: 10}}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' ,flex : 1}}>

                      <Image style={{ alignSelf: 'flex-start', width: 50, height: 50, borderRadius: 15, margin: 10 }} source={{ uri: item.avatar }} />

                      <View>
                        <Text style={{ fontSize: 15, fontWeight: '500' }}>
                          Name : {item.first_name}  {item.last_name}
                        </Text>

                        <Text style={{ fontSize: 15, fontWeight: '500' }}>
                          E-mail : {item.email}
                        </Text>
                      </View>

                    </View>

                  </View>
                  
                </TouchableOpacity>
              </View>
            }
          />

        </ScrollView>

      </View>
    );
  }
};


const styles = StyleSheet.create({

  card: {
    marginLeft: 20,
    width: 350,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#B0BEC5',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    alignSelf: 'center',
    margin: 10
  },
  create: {
    width: 110,
    height: 45,
    marginTop: 20,
    backgroundColor: "#75c971",
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    alignSelf: 'center',
    marginRight: 20,
    marginTop: 30
  },
});
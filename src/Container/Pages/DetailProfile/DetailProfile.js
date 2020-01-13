import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import photo from '../../../../assets/tom.jpg';

class DetailProfile extends Component {
  handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      alert('BYE');
      this.props.navigation.navigate('Home');
    } catch (e) {
      console.log('error', e);
    }
  };

  render() {
    return (
      <View style={styles.parent}>
        <StatusBar barStyle="light-content" backgroundColor="#043353" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: '#043353',
              height: 180,
              flexDirection: 'row',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
            <TouchableOpacity onPress={this.handleLogout}>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginLeft: 20,
                  marginTop: 20,
                }}>
                <Icon name="sign-out" size={32} color="#D3DDE6" />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexWrap: 'wrap',
              borderRadius: 50,
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: -60,
            }}>
            <Image
              source={photo}
              style={{
                width: 150,
                height: 150,
                borderRadius: 80,
                borderColor: '#D3DDE6',
                borderWidth: 1,
              }}
            />
          </View>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 10,
              fontSize: 35,
              fontFamily: 'AirbnbCerealLight',
              fontWeight: 'bold',
            }}>
            Background
          </Text>
          <View
            style={{
              height: 170,
              backgroundColor: '#D3DDE6',
              marginHorizontal: 20,
              marginTop: 15,
              borderRadius: 10,
            }}></View>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 15,
              fontSize: 35,
              fontFamily: 'AirbnbCerealLight',
              fontWeight: 'bold',
            }}>
            Portfolio
          </Text>
          <View
            style={{
              height: 170,
              backgroundColor: '#D3DDE6',
              marginHorizontal: 20,
              marginTop: 15,
              borderRadius: 10,
            }}></View>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 15,
              fontSize: 35,
              fontFamily: 'AirbnbCerealLight',
              fontWeight: 'bold',
            }}>
            About
          </Text>
          <View
            style={{
              height: 170,
              backgroundColor: '#D3DDE6',
              marginHorizontal: 20,
              marginVertical: 15,
              borderRadius: 10,
            }}></View>
        </ScrollView>
        <TouchableOpacity>
          <View
            style={{
              height: 60,
              backgroundColor: '#043353',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}>
            <Text
              style={{
                color: '#D3DDE6',
                fontFamily: 'AirbnbCerealLight',
                fontWeight: 'bold',
                fontSize: 24,
              }}>
              HIRE
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default DetailProfile;

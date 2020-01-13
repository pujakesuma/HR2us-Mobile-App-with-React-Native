import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import logo from '../../../assets/logo1.png';
import {Button} from 'react-native-elements';
// import {Container, Header, Content, Button, Text} from 'native-base';

class Home extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <StatusBar barStyle="light-content" backgroundColor="#043353" />
        <View
          style={{
            backgroundColor: '#043353',
            height: 430,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}>
          <Image style={{width: 150, height: 150}} source={logo} />
          <Text
            style={{
              paddingTop: 20,
              color: '#D3DDE6',
              fontFamily: 'AirbnbCerealLight',
              fontSize: 60,
            }}>
            HR2us
          </Text>
          <Text
            style={{
              paddingTop: 3,
              color: '#D3DDE6',
              fontFamily: 'AirbnbCerealBook',
              fontSize: 20,
            }}>
            Hire expert frelancers for any job, online!
          </Text>
          <Text
            style={{
              paddingTop: 1,
              color: '#D3DDE6',
              fontFamily: 'AirbnbCerealBook',
              fontSize: 11,
            }}>
            Millions of small business use Frelancer to turn their ideas into
            reality.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#D3DDE6',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            title="Login"
            type="outline"
            buttonStyle={{
              width: 250,
              height: 50,
              borderRadius: 20,
              borderWidth: 0.8,
              borderColor: '#043353',
              marginTop: 25,
            }}
            onPress={() => this.props.navigation.navigate('Login')}
          />
          <Button
            title="Register"
            type="solid"
            buttonStyle={{
              width: 250,
              height: 50,
              borderRadius: 20,
              borderWidth: 0.8,
              backgroundColor: '#043353',
              borderColor: '#043353',
              marginTop: 10,
            }}
            onPress={() => this.props.navigation.navigate('Register')}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#D3DDE6',
    flex: 1,
  },
});

export default Home;

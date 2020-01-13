import React, {Component} from 'react';
import {Picker, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {postLogin} from '../../Config/Redux/Actions/userAuth';

export class Login extends Component {
    state = {
        email: '',
        password: '',
        role: '',
        token: '',
        id: ''
    };

    handleSubmitLogin = async e => {
        e.preventDefault();
        let dataLogin = {
            email: this.state.email,
            password: this.state.password,
            role: this.state.role,
            token: this.state.token,
            id: this.state.id
        };
        await this.props.postLogin(dataLogin)
        .then(async response => {
            console.log(response)
            if (
                response.value.data.message === "Invalid Password!",
                response.value.data.message === "Email Required"
              ){
                alert('it seems like something is incomplete')
              } else if (this.state.role==="company"){
                AsyncStorage.setItem('@token', response.value.data.token)
                AsyncStorage.setItem('@id', response.value.data.data.id)
                console.log(await AsyncStorage.getItem("@token"));
                alert('LOGIN SUCCESS!')
                this.props.navigation.navigate('HomeCompany');
              } else if (this.state.role==="engineer"){
                AsyncStorage.setItem('@token', response.value.data.token)
                AsyncStorage.setItem('@id', response.value.data.data.id)
                console.log(await AsyncStorage.getItem("@token"));
                alert('LOGIN SUCCESS!')
                this.props.navigation.navigate('DetailProfile');
              }
            })
            .catch(err => {
                alert('Please try again!')
            })
    }
  render() {
    return (
      <View style={styles.parent}>
        <View
          style={{
            backgroundColor: '#043353',
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}>
          <Text
            style={{
              paddingTop: 20,
              color: '#D3DDE6',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              fontSize: 50,
            }}>
            LOGIN
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#D3DDE6',
            height: 420,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Input
            label="E-mail"
            placeholder="E-mail"
            containerStyle={{width: 280, marginTop: 80}}
            inputStyle={{paddingLeft: 15, paddingRight: 15}}
            leftIcon={{type: 'font-awesome', name: 'envelope-square', size: 20}}
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <Input
            label="Password"
            textContentType="password"
            placeholder="Password"
            containerStyle={{width: 280, marginTop: 10}}
            inputStyle={{paddingLeft: 20, paddingRight: 15}}
            leftIcon={{type: 'font-awesome', name: 'lock', size: 22}}
            errorStyle={{color: 'red'}}
            onChangeText={password => this.setState({password})}
            secureTextEntry={true}
            value={this.state.password}
          />
          <Picker style={{height: 50, width: 250}} mode="dropdown" selectedValue={this.state.role}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({role: itemValue})}>
            <Picker.Item label="Select your role" value="Select your role" />
            <Picker.Item label="engineer" value="engineer" />
            <Picker.Item label="company" value="company" />
          </Picker>
          <Button
            title="Login"
            type="outline"
            titleStyle={{color: '#043353'}}
            buttonStyle={{
              width: 250,
              height: 50,
              borderRadius: 20,
              borderWidth: 0.8,
              borderColor: '#043353',
              marginTop: 25,
            }}
            onPress={this.handleSubmitLogin}
          />
        </View>

        <View
          style={{
            backgroundColor: '#043353',
            height: 220,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}></View>
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

const mapStateToProps = state => {
    return {};
  };
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        postLogin,
      },
      dispatch,
    );
  };
  

export default connect(mapStateToProps, mapDispatchToProps) (Login);

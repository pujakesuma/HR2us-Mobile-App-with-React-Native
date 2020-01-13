import React, {Component} from 'react';
import {Picker, Text, View, StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postRegister} from '../../Config/Redux/Actions/userAuth';

export class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    role: '',
  };

  handleSubmitRegister = async e => {
    e.preventDefault();
    let dataRegister = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    };
    await this.props
      .postRegister(dataRegister)
      .then(async response => {
        console.log(response);
        console.log(response.value.data)
        console.log(response.value.data.message)
        if (
          response.value.data.message === "Invalid Email!"
        ){
          alert('it seems like something is incomplete')
        } else {
          alert('REGISTER SUCCESS!')
          this.props.navigation.navigate('Login');
        }
      })
      .catch(err => {
        alert('Please try again');
      });
  };

  render() {
    return (
      <View style={styles.parent}>
        <View
          style={{
            backgroundColor: '#043353',
            height: 160,
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
            REGISTER
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#D3DDE6',
            height: 460,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Input
            label="Full Name"
            placeholder="Full Name"
            containerStyle={{width: 280, marginTop: 30}}
            inputStyle={{paddingLeft: 15, paddingRight: 15}}
            leftIcon={{type: 'font-awesome', name: 'user', size: 20}}
            onChangeText={name => this.setState({name})}
            value={this.state.name}
          />
          <Input
            label="E-mail"
            placeholder="E-mail"
            containerStyle={{width: 280, marginTop: 10}}
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
          <Picker
            style={{height: 50, width: 250, marginTop: 15}}
            mode="dropdown"
            selectedValue={this.state.role}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({role: itemValue})
            }>
            <Picker.Item label="Select your role" value="Select your role" />
            <Picker.Item label="engineer" value="engineer" />
            <Picker.Item label="company" value="company" />
          </Picker>
          <Button
            title="Register"
            type="outline"
            titleStyle={{color: '#043353'}}
            buttonStyle={{
              width: 200,
              height: 50,
              borderRadius: 20,
              borderWidth: 0.8,
              borderColor: '#043353',
              marginTop: 15,
            }}
            onPress={this.handleSubmitRegister}
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
      postRegister,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

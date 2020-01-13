import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
} from 'react-native';
import {Card, SearchBar, Icon} from 'react-native-elements';
import logo from '../../../../assets/arkademy1.png';
import photo from '../../../../assets/gue.jpg';
import photo2 from '../../../../assets/tom.jpg';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllEngineers} from '../../../Config/Redux/Actions/engineers';

// import {Container, Header, Content, Button, Text} from 'native-base';

class HomeCompany extends Component {
  state = {
    search: '',
    listEngineer: [],
    totalData: 0,
    nextPage: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      alert('BYE');
      this.props.navigation.navigate('Home');
    } catch (e) {
      console.log('error', e);
    }
  };

  getData = async () => {
    await this.props.getAllEngineers();
    console.log('response data', this.props.dataEngineers.dataEngineers.data);
    this.setState({
      ...this.state,
      listEngineer: this.props.dataEngineers.dataEngineers.data.response.data,
      totalData: this.props.dataEngineers.dataEngineers.data.response.dataTotal,
      nextPage: this.props.dataEngineers.dataEngineers.data,
    });
  };

  async componentDidMount() {
    await this.getData();
    console.log('bsszzz', this.state.listEngineer);
  }

  render() {
    const {search} = this.state;
    // console.log('data', data);

    return (
      <View style={styles.parent}>
        <StatusBar barStyle="light-content" backgroundColor="#043353" />
        <View
          style={{
            backgroundColor: '#043353',
            height: 80,
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Image
            style={{width: 70, height: 30, marginTop: 30, marginLeft: 10}}
            source={logo}
          />
          <SearchBar
            placeholder="Search..."
            onChangeText={this.updateSearch}
            value={search}
            platform="android"
            containerStyle={{
              width: 250,
              height: 25,
              borderRadius: 20,
              marginRight: 10,
              marginTop: 40,
              justifyContent: 'center',
              backgroundColor: '#D3DDE6',
            }}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginRight: 20,
              marginTop: 70,
            }}>
            {this.state.listEngineer.map((item, index) => {
              return (
                <Card
                  key={item.id}
                  containerStyle={{width: 240, height: 320, borderRadius: 20}} image={photo2} imageStyle={{height: 200, width: 100}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('DetailProfile', {
                        id: item.id,
                        name: item.name,
                      });
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'baseline'
                      }}>
                      <Text
                        style={{
                          fontSize: 24,
                          fontFamily: 'AirbnbCerealLight',
                          fontWeight: "bold"
                        }}>
                        {item.name}
                      </Text>
                      <View style={{flexDirection: 'row', marginVertical: 5}}>
                      <Icon name="trophy" type="font-awesome" size={14}/>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'AirbnbCerealLight',
                          marginLeft: 8
                        }}>
                        {item.skill}
                      </Text>
                      </View>
                      <View style={{flexDirection: 'row', marginVertical: 5}}>
                      <Icon name="money" type="font-awesome" size={14}/>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'AirbnbCerealLight',
                          marginLeft: 8
                        }}>
                        {item.expected_salary}
                      </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Card>
              );
            })}
            {/* {this.state.listEngineer.map((item, index) => {
              return (
                <TouchableOpacity
                key={item.id}
                  onPress={() => {
                    this.props.navigation.navigate('DetailProfile')
                  }
                  }
                  style={{marginLeft: 20}}>
                  
                </TouchableOpacity>
              );
            })} */}
          </View>
        </ScrollView>
        <TouchableOpacity onPress={this.handleLogout}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              marginVertical: 30,
              flexWrap: 'wrap',
            }}>
            <Icon name="sign-out" type="font-awesome" size={32} color="#043353" />
          </View>
        </TouchableOpacity>
        {/* <FlatList
            data={this.props.engineers.data.results}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
            refreshing={this.props.engineers.isLoading}
            onRefresh={this.getData}
          /> */}
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
  return {
    // listEngineers: state.listEngineers,
    dataEngineers: state.engineers, //import dari index reducer, sesuai nama ya
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getAllEngineers,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeCompany);

{
  /* <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 170,
                      height: 254,
                      borderRadius: 20,
                      marginHorizontal: 20,
                    }}>
                  </View> */
}

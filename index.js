/**
 * @format
 */

import React, {Component} from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
// import Form from './src/Components/Form'
import {name as appName} from './app.json';
import {Provider} from 'react-redux'

import store from './src/Config/Redux/store'

const reduxStore = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => reduxStore);

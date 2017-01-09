'use strict'

import * as React from 'react'
import { Component } from 'react';
import {
    Text,
    View,
    AppRegistry
} from 'react-native';
// import App from './artifacts'
import App from './artifacts'

class Root extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('typescript', () => Root)
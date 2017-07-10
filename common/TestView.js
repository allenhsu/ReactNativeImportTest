import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Colors,
  DefaultColors,
} from './';

import AnotherColors from './colors';

console.log('Colors out of component:');
console.log(Colors);
console.log(DefaultColors);
console.log(AnotherColors);

export default class TestView extends Component {
  render() {
    console.log('Colors in render:');
    console.log(Colors);
    console.log(DefaultColors);
    console.log(AnotherColors);
    return (
      <View>
        <Text>
          I'm a test view.
        </Text>
      </View>
    );
  }
}
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { WebBrowser } from 'expo';

export default class Button extends Component {
    _onPressButton() {
      WebBrowser.openBrowserAsync('https://www.google.com/search?q=find+grappling+schools+nearby&oq=find+grappling+schools+nearby&aqs=chrome..69i57.9978j0j8&sourceid=chrome&ie=UTF-8');
    }
  
  
    render() {
      return (
        <View style={styles.container}>
          
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Find Instruction</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
  
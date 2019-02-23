import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default class Button extends Component {
    _onPressButton() {
      Alert.alert('You tapped the button!')
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
  
import React, { Component } from 'react';
import { Alert, Platform, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

export default class Button extends Component {
    _onPressButton() {
      Alert.alert('You tapped the button!')
    }
  
    _onLongPressButton() {
      Alert.alert('You long-pressed the button!')
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
  
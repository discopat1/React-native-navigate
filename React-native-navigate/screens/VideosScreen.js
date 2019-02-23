import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Constants, WebBrowser } from 'expo';
import VideoLinks from '../components/VideoLinks';
import Button from '../components/Button';
import styles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>Grappling videos to</Text>
        <Text style={styles.getStartedText}>fit your needs</Text>
       </View>
       
        <ScrollView>
          <View style={styles.scrollContainer}>
          <VideoLinks
          title='BJJ Drills'
          />
          <VideoLinks
          title='BJJ Fitness'
          />
          <VideoLinks
          title='BJJ Techniques'
          />
          <VideoLinks
          title='Wrestling Drills'
          />
          <VideoLinks
          title='Wrestling Fitness'
          />
          <VideoLinks
          title='Wrestling Techniques'
          />
          <VideoLinks
          title='BJJ for MMA'
          />
          <VideoLinks
          title='Wrestling for MMA'
          />
          </View>
        </ScrollView>
      
      <View>
        <Button/>
      </View>
        
      </View>
      
      
    )
  }
}


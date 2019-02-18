import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Constants, WebBrowser } from 'expo';
import VideoLinks from '../components/VideoLinks';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>Grappling videos to fit your needs</Text>
      </View>
      <View>
        <ScrollView>
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
        </ScrollView>
      </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AA6C39',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 50,
  },
  getStartedText: {
    fontSize: 30,
    color: '#BCAEA3',
    lineHeight: 35,
    textAlign: 'center',
    textShadowColor: '#242424',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 10
  },
  listContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
})
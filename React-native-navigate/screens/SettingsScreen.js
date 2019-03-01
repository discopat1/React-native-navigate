
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Events from '../components/Events';
import Button from '../components/Button';
import styles from './styles';

export default class EventScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>Grappling events</Text>
        <Text style={styles.getStartedText}>near you</Text>
       </View>
       
        <ScrollView>
          <View style={styles.scrollContainer}>
          <Events
          title='BJJ Seminars'
          />
          <Events
          title='Wrestling Seminars'
          />
          <Events
          title='Sambo Seminars'
          />
          <Events
          title='BJJ Competitions'
          />
          <Events
          title='All Grappling Competitions'
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


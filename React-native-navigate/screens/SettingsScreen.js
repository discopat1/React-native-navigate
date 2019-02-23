
import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import openMap from 'react-native-open-maps';

import MapView from 'react-native-maps'
export default class App extends Component {
  render() {
    return (
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 37,
          longitude: -122,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}>
        <MapView.Marker
        coordinate={{
          latitude: 37,
          longitude: -122
        }}
        />
      </MapView>
    );
  }
}

// export default class App extends Component {
//   state = {
//     location: null,
//     errorMessage: null,
//     mapRegion: null,
//     lastLat: null,
//     lastLong: null,
//   };

//   componentDidMount() {
//     this.watchID = navigator.geolocation.watchPosition((position) => {
//       // Create the object to update this.state.mapRegion through the onRegionChange function
//       let region = {
//         latitude:       position.coords.latitude,
//         longitude:      position.coords.longitude,
//         latitudeDelta:  0.00922*1.5,
//         longitudeDelta: 0.00421*1.5
//       }
//       this.onRegionChange(region, region.latitude, region.longitude);
//     }, (error)=>console.log(error));
//   }
    
//   onRegionChange(region, lastLat, lastLong) {
//     this.setState({
//       mapRegion: region,
//       // If there are no new values set the current ones
//       lastLat: lastLat || this.state.lastLat,
//       lastLong: lastLong || this.state.lastLong
//     });
//   }
    
//   componentWillUnmount() {
//     navigator.geolocation.clearWatch(this.watchID);
//   }

//   schooolsNearby() {

//     openMap({ query: 'grappling schools' });
//   }

//   componentWillMount() {
//     if (Platform.OS === 'android' && !Constants.isDevice) {
//       this.setState({
//         errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
//       });
//     } else {
//       this._getLocationAsync();
//     }
//   }

//   _getLocationAsync = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== 'granted') {
//       this.setState({
//         errorMessage: 'Permission to access location was denied',
//       });
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     this.setState({ location });
//   };

//   render() {
//     let text = 'Waiting..';
//     if (this.state.errorMessage) {
//       text = this.state.errorMessage;
//     } else if (this.state.location) {
//       text = JSON.stringify(this.state.location);
//     }

//     return (
//       <View style={styles.container}>
//         {/* <Text style={styles.paragraph}>{text}</Text> */}
      
//         <Button
//           color={'#bdc3c7'}
//           onPress={this.schooolsNearby}
//           title="Click To Open Maps 🗺" />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });
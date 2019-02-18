import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Constants, WebBrowser } from 'expo';

export default class VideoLinks extends Component {
  render() {
    return (
      <View 
    //   style={styles.container}
      >
        <Button
          title={this.props.title}
          onPress={this._handleOpenWithWebBrowser}
          color='#242424'
        />
      </View>
    );
  }
  
  multiWordQuery = () => {
      const titleArr = this.props.title.split(" ");
      return titleArr.join("+");
  }
  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(`https://www.youtube.com/results?search_query=${this.multiWordQuery()}`);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

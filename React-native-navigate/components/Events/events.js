import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { WebBrowser } from 'expo';

export default class VideoLinks extends Component {
  render() {
    return (
      <View 
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
    WebBrowser.openBrowserAsync(`https://www.google.com/search?q=${this.multiWordQuery()}&aqs=chrome..69i57j0l5.13921j1j8&sourceid=chrome&ie=UTF-8`);
  }
}


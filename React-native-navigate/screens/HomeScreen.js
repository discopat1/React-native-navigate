import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
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
          <Text style={styles.getStartedText}>Grappler's</Text>
          <Text style={styles.getStartedText}>
            Paradise
          </Text>
        </View>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.scrollContainer}>
              <View>
                <Text style={styles.quote}>“Where there’s discomfort, there’s fear. In these very tough positions, you’re in a little piece of hell. And through this daily suffering, you learn to survive in these situations. You have to find comfort in the uncomfortable situations. You have to be able to live your worst nightmare. Jiu-Jitsu puts you completely in the moment where you must have complete focus on finding a solution to the problem. This trains the mind to build that focus, to increase your awareness, your capacity to solve problems. Sometimes, you don’t have to win. You cannot win. But that has nothing to do with losing.”</Text>
                <Text style={styles.quote}>-Rickson Gracie</Text>
              </View>
            </View>
          </ScrollView>
          <View>
            <Button/>
          </View>
        </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}


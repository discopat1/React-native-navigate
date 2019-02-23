import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#AA6C39',
    },
    quote: {
      color: '#242424',
      textShadowColor: 'rgba(0,0,0,0.4)',
      textShadowOffset: {width: 1, height: 2},
      textShadowRadius: 10
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
      marginTop: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
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
    scrollContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    button: {
        marginTop: 160,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
  });

  export default styles;
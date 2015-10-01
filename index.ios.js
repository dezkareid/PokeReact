/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
} = React;

var PokeReact = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{ uri: "http://vignette3.wikia.nocookie.net/battlefordreamislandfanfiction/images/4/4c/Pokeball.png"}}>
        </Image>
        <Text style={styles.welcome}>
          This is the begin of the end
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  thumbnail: {
    width: 81,
    height: 81,
  },
});

AppRegistry.registerComponent('PokeReact', () => PokeReact);

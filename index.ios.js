/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Router = require('react-native-router');
var {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   TouchableHighlight,
   SegmentedControlIOS,
   } = React;


const colors = {
  yellow: '#FFBE00'
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBE00'
  }
});
//<Text style={styles.headerTitle}>MAP.SUNSURFERS</Text>

var sunsurfers2 = React.createClass({
  render: function () {
    return (
       <View style={styles.container}>
         <Router
            firstRoute={{
                name: 'noname',
                component: require('./app/hello')
              }}
            hideNavigationBar
         />
       </View>
    );
  }
});

AppRegistry.registerComponent('sunsurfers2', () => sunsurfers2);

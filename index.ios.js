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
class sunsurfers2 extends React.Component {
  constructor() {
    super()

    this.props.store.subscribe(function(){
      console.log('store change', this.props.store.getState())
    })
  }
  render () {
    return (
        <View style={styles.container}>
          <Router
              firstRoute={{
                name: 'noname',
                component: require('./app/index')
              }}
              hideNavigationBar
          />
        </View>
    );
  }
}

//
//const { createStore } = require('redux');
//
//function reducer (state = {}, action) {
//  console.log('store', state, action)
//  return state;
//}
//const store = createStore(reducer);

AppRegistry.registerComponent('sunsurfers2', (() => sunsurfers2 ));

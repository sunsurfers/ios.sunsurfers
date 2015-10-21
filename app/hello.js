const React = require('react-native');
const {
   View,
   Text,
   TouchableHighlight,
   SegmentedControlIOS,
  //MapView,
   Image,
   AsyncStorage,
   } = React;

const _ = require('lodash');

const styles = require('./styles');
const Map = require('./components/_map.js');
const List = require('./components/_list.js');
const Profile = require('./components/_profile.js');

const _navItems = ['Список', 'Карта'];

const {sunsurfers} = require('./fixture');


//const Firebase = require("firebase")
//const myFirebaseRef = new Firebase("https://glaring-inferno-9805.firebaseio.com/")
//const db_people = myFirebaseRef.child('people')
//
//db_people.on('value', function (snap) {
//  console.log(snap.val())
//});
//
//db_people.push([
//  {
//    id: 'marat',
//    name: 'Marat Hasanov',
//    age: 27,
//    position: [51.5033630, -0.1276250],
//    sex: 'male',
//  },
//  {
//    id: 'natalia',
//    name: 'Natasha Oleynikova',
//    age: 25,
//    position: [51.5033630, -0.1276250],
//    sex: 'female',
//  },
//  {
//    id: 'vitaly',
//    name: 'Vitalik Safronov',
//    age: 40,
//    position: [51.5033630, -0.1276250],
//    sex: 'male',
//  },
//]);

class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedIndex: 0
    };
  }

  switchPage(nextItem) {
    this.setState({
      selectedIndex: _navItems.indexOf(nextItem)
    })
  }

  showProfile(id) {
    this.props.toRoute({
      name: 'profile',
      component: Profile,
      data: {
        id: id
      }
    })
  }

  render() {
    return (
       <View style={[styles.screen]}>
         <View style={[styles.header]}>
           <SegmentedControlIOS
              style={styles.headerSegment}
              values={_navItems}
              selectedIndex={this.state.selectedIndex}
              tintColor='white'
              onValueChange={this.switchPage.bind(this)}
           />
         </View>
         <View style={[styles.content]}>
           {(this.state.selectedIndex === 0
                 ? <List source={sunsurfers} showProfile={this.showProfile.bind(this)}/>
                 : <Map showProfile={this.showProfile.bind(this)}/>
           )}
         </View>
       </View>
    )
  }
}

//<Text style={styles.welcome}>
//  страница карты
//</Text>
//<Text style={styles.instructions}>
//[-] карта {'\n'}
//[-] список {'\n'}
//[-] профиль {'\n'}
//[-] настройки {'\n'}
//[-] авторизация {'\n'}
//</Text>
//
//<TouchableHighlight onPress={this.nextPage}>
//  <Text>Next page please!</Text>
//  </TouchableHighlight>

module.exports = Index;
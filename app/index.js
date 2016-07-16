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
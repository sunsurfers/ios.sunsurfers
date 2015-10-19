const React = require('react-native');
const {
   View,
   Text,
   TouchableHighlight,
   SegmentedControlIOS,
   //MapView,
   ListView,
   Image,
   AsyncStorage,
   } = React;

const _ = require('lodash');


const styles = require('./../styles');
const Icon = require('react-native-vector-icons/FontAwesome')

/** fixture */
const { sunsurfers } = require('./../fixture');
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const sunsurfersArr = ds.cloneWithRows(sunsurfers)


const Map = require('react-native-mapbox-gl')

const _navItems = ['Список', 'Карта'];

class Index extends React.Component {
  constructor() {
    super();

    Object.assign(this, Map.Mixin)

    console.log(this)

    this.state = {
      selectedIndex: 0
    }

    //setTimeout(function () {
    //  this.setZoomLevelAnimated('map', 4)
    //
    //
    //  this.addAnnotations('map', [{
    //    "latitude": 40.72052634,
    //    "longitude":  -73.95686958312988,
    //    "title": "This is another title",
    //    "subtitle": "this is a subtitle",
    //    "id": "010101",
    //    "rightCalloutAccessory": {
    //      "url": "http://png-3.findicons.com/files/icons/2799/flat_icons/256/gear.png",
    //      "height": 30,
    //      "width": 30
    //    },
    //    "annotationImage": {
    //      "url": "https://avatars3.githubusercontent.com/u/600935?v=3&s=84",
    //      "height": 25,
    //      "width": 25
    //    }
    //  }, {
    //    "latitude": 40.82052634,
    //    "longitude":  -73.85686958312988,
    //    "title": "This is another title",
    //    "subtitle": "this is a subtitle"
    //  }])
    //}.bind(this), 3000)



  }

  switchPage(nextItem) {
    this.setState({
      selectedIndex: _navItems.indexOf(nextItem)
    })
  }

  renderMap() {
    //const annotations = sunsurfers.map(function (s) {
    //  return {
    //    id: s.id,
    //    latitude: s.position[0],
    //    longitude: s.position[1],
    //    animateDrop: true,
    //    title: s.name,
    //    subtitle: '___' + s.name,
    //    annotationImage: {
    //      url: 'http://rogozhnikoff.com/sunsurfers/' + s.id + '-pin.png',
    //      width: 10,
    //      height: 10,
    //    }
    //  }
    //});
    //return <MapView
    //   style={[styles.map]}
    //   showsUserLocation
    //   annotations={annotations}
    ///>


    //const theme = _.shuffle(['dark', 'light', 'emerald', 'streets', 'satellite'])[0]
    const theme = 'dark';
    const annotations = [{
      "latitude": 40.72052634,
      "longitude":  -73.94686958312988,
      "title": "This is a title",
      "subtitle": "this is a subtitle",
      "id": "foobar1234",
      "rightCalloutAccessory": {
        "url": "image!myIcon.jpg",
        "height": 30,
        "width": 30
      }
    }]

    return (<Map
       ref="map"
       style={styles.map}
       direction={0}
       rotateEnabled={true}
       scrollEnabled={true}
       zoomEnabled={true}
       showsUserLocation={true}
       accessToken={'pk.eyJ1Ijoicm9nb3pobmlrb2ZmIiwiYSI6ImNpZmxpZTk5ZjAxNGd0bmx5eHdrbTQwcnAifQ.aIiWiJHl3Ai5V06nxkw1DA'}
       styleURL={'asset://styles/' + theme + '-v8.json'}


       //centerCoordinate={this.state.center}
       //zoomLevel={this.state.zoom}


       userLocationVisible={true}
       onRegionChange={this.onRegionChange}
       //onRegionWillChange={this.onRegionWillChange}
       annotations={annotations}
       //onOpenAnnotation={this.onOpenAnnotation}
       //onRightAnnotationTapped={this.onRightAnnotationTapped}
       //onUpdateUserLocation={this.onUpdateUserLocation}
    />);
  }

  onRegionChange (position) {
    console.log(position)
  }

  renderList() {
    const itemStyle = {
      flexDirection: 'row',
      padding: 3,
      paddingLeft: 15
    };
    return <ListView
       style={{paddingTop: 5}}
       dataSource={sunsurfersArr}
       renderRow={(s) => (<View style={itemStyle}>
         <View style={{flex: 1}}>
            <Image source={{uri: 'http://rogozhnikoff.com/sunsurfers/' + s.id + '-pin.png'}} style={styles.avatar}/>
         </View>
         <View style={[{flex: 5, flexDirection: 'row'}]}>
            <Icon name={s.sex} color="black" style={{marginRight: 5, marginTop: 14}} />
            <Text key={s.name} style={[{lineHeight: 28}]}><Text style={styles.bold}>{s.name}</Text> - {s.age} годков</Text>
         </View>
       </View>)}
    />
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
           {(this.state.selectedIndex === 0 ? this.renderList : this.renderMap)()}
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
const React = require('react-native');
const { PropTypes, View, Text, AsyncStorage } = React;
const styles = require('./../styles');
const MapBox = require('react-native-mapbox-gl');
const coords = {
  kyiv: {
    latitude: 50.4500,
    longitude: 30.5233
  }
};

/*
* onRegionChange срабатывает 2 раза при чистой загрузке
* */

// shouldComponentUpdate надо повесить, а то дергается

class Map extends React.Component {
  constructor () {
    super();

    Object.assign(this, MapBox.Mixin)

    this.state = {
      //position: Object.assign({}, coords.kyiv, {zoom: 8}),
      position: null,
      theme: 'dark', // 'dark', 'light', 'emerald', 'streets', 'satellite'
      accessToken: 'pk.eyJ1Ijoicm9nb3pobmlrb2ZmIiwiYSI6ImNpZmxpZTk5ZjAxNGd0bmx5eHdrbTQwcnAifQ.aIiWiJHl3Ai5V06nxkw1DA'
    };

    setTimeout(function () {
      AsyncStorage.getItem('mapPosition').then(function (mapPosition) {
        //console.log('get mapPosition', JSON.parse(mapPosition))
        this.setState({
          position: JSON.parse(mapPosition) || {latitude: 0, longitude: 0, zoom: 0}
        })
      }.bind(this))
    }.bind(this), 222);

    //setTimeout(function () {
    //  this.setState({
    //    theme: 'light'
    //  })
    //}.bind(this), 4444)
    setTimeout(function () {
      this.addAnnotations('map', [{
        "latitude": 40.722,
        "longitude":  -73.944,
        "title": "Мурад Рогожников",
        //"subtitle": "...",
        "id": "foobar1234",
        "rightCalloutAccessory": {
          "url": "http://rogozhnikoff.com/sunsurfers/natalia-pin.png",
          "height": 40,
          "width": 40
        },
        "annotationImage": {
          "url": "https://cldup.com/CnRLZem9k9.png",
          "height": 25,
          "width": 25
        }
      }, {
        "latitude": 40.725,
        "longitude":  -73.949,
        "title": "Марат Хасанов",
        "subtitle": "12.2 км от тебя",
        "id": "foobar12345",
        "rightCalloutAccessory": {
          "url": "http://rogozhnikoff.com/sunsurfers/marat-pin.png",
          "height": 40,
          "width": 40
        },
        "annotationImage": {
          "url": "https://cldup.com/9Lp0EaBw5s.png",
          "height": 25,
          "width": 25
        }
      }])
    }.bind(this), 3333)
  }

  onRegionChange (position) {
    //console.log('onRegionChange', position, JSON.stringify(position))
    AsyncStorage.setItem('mapPosition', JSON.stringify(position))

    //this.setState({
    //  position: position
    //})
  }



  render () {
    const {position} = this.state;

    if(!position) {
      return (<View style={{flex: 1}}>
         <Text style={{lineHeight: 100, textAlign: 'center'}}>Ща, подождь...</Text>
      </View>)
    }

    //const centerCoordinate = position ? {latitude: position.latitude, longitude: position.longitude} : null;

    //console.log('render position', position)



    return (<MapBox
       ref="map"
       //debugActive={__DEV__}
       style={styles.map}
       direction={0}
       rotateEnabled={true}
       scrollEnabled={true}
       zoomEnabled={true}
       showsUserLocation={true}
       accessToken={this.state.accessToken}
       styleURL={'asset://styles/' + this.state.theme + '-v8.json'}


       centerCoordinate={position || undefined}
       zoomLevel={position ? position.zoom : 2}


       userLocationVisible={true}
       onRegionChange={this.onRegionChange.bind(this)}
       //onRegionWillChange={this.onRegionWillChange}
       //annotations={annotations}
       //onOpenAnnotation={this.onOpenAnnotation}
       //onRightAnnotationTapped={this.onRightAnnotationTapped}
       //onUpdateUserLocation={this.onUpdateUserLocation}
    />);
  }
}


module.exports = Map
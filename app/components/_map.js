const React = require('react-native');
const styles = require('./../styles');
const MapBox = require('react-native-mapbox-gl');


class Map extends React.Component {
  constructor () {
    super();

    Object.assign(this, Map.Mixin)

    this.state = {
      theme: 'dark', // 'dark', 'light', 'emerald', 'streets', 'satellite'
      accessToken: 'pk.eyJ1Ijoicm9nb3pobmlrb2ZmIiwiYSI6ImNpZmxpZTk5ZjAxNGd0bmx5eHdrbTQwcnAifQ.aIiWiJHl3Ai5V06nxkw1DA'
    }
  }

  onRegionChange (position) {
    console.log(position)
  }

  render () {
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
    }];

    return (<MapBox
       ref="map"
       style={styles.map}
       direction={0}
       rotateEnabled={true}
       scrollEnabled={true}
       zoomEnabled={true}
       showsUserLocation={true}
       accessToken={this.state.accessToken}
       styleURL={'asset://styles/' + this.state.theme + '-v8.json'}


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
}


module.exports = Map
const React = require('react-native');
const { PropTypes, View, Text, AsyncStorage } = React;
const Button = require('react-native-button');

class Random extends React.Component {
  constructor() {
    super();

    this.state = {}

    AsyncStorage.getItem('randoms').then(function (randoms) {
      console.log('randoms', randoms)
      this.setState({randoms: JSON.parse(randoms)})
    }.bind(this))
  }

  onPress () {
    console.log('onPress')

    fetch('https://qrng.anu.edu.au/API/jsonI.php?length=10&type=uint8')
       .then((response) => response.text())
       .then(function (results) {
         console.log('fetch')
         this.setState({randoms: JSON.parse(results).data})
       }.bind(this)).catch(function () {
      console.log(arguments)
    })
  }

  render() {
    const {} = this.props;

    const {randoms} = this.state
    if(randoms) {
      AsyncStorage.setItem('randoms', JSON.stringify(randoms))
    }

    const randomsHtml = randoms ? randoms.map(function (n, i) {
      return (<Text key={i}>{n}</Text>)
    }) : null;

    return (<View>
      <Button onPress={this.onPress.bind(this)}>Touch me, Baby</Button>
      {randomsHtml}
    </View>);
  }
}

Random.defaultProps = {};

Random.propTypes = {};

module.exports = Random
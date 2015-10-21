const React = require('react-native');
const { PropTypes, View, Text, TouchableHighlight } = React;
const Button = require('react-native-button');

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {}
  }
  goBack() {
    console.log('goBack', this.props)
    if (!this.props.willDisappear) {
      this.props.toBack();
    }
  }

  render() {
    console.log(this.props)
    const {data} = this.props;

    return (<View style={{marginTop: 12}}>
      <Button onPress={this.goBack.bind(this)}>back</Button>
      <Text>_ i am Profile component, with id {data.id}</Text>
    </View>);
  }
}

Profile.defaultProps = {};

Profile.propTypes = {};

module.exports = Profile
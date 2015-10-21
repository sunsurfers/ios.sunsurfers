const React = require('react-native');
const {ListView, View, Text, Image, PropTypes, TextInput, TouchableHighlight} = React;
const styles = require('./../styles');


const Icon = require('react-native-vector-icons/FontAwesome');
const Random = require('./_random');

const _ = require('lodash')


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class List extends React.Component {
  constructor() {
    super();

    this.state = {text: ''}
  }

  render() {
    const sunsurfersArr = ds.cloneWithRows(filterByQuery(this.props.source, this.state.text))

    return (<View>
      <TextInput
         ref="search"
         style={styles.searchInput}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         placeholder="Search me, baby!"
      />
      <ListView
         style={{paddingTop: 5}}
         dataSource={sunsurfersArr}
         renderRow={this.renderRow.bind(this)}
      />

      <Random />

    </View>)
  }

  onPress (id, ev) {
    this.props.showProfile(id)
  }

  renderRow(s) {
    return (<TouchableHighlight onPress={this.onPress.bind(this, s.id)} underlayColor="#E2E2E2">
         <View style={styles.listItem} key={s.id} on>
           <View style={{flex: 1}}>
             <Image source={{uri: 'http://rogozhnikoff.com/sunsurfers/' + s.id + '-pin.png'}} style={styles.avatar}/>
           </View>
           <View style={[{flex: 5, flexDirection: 'row'}]}>
             <Icon name={s.sex} color="black" style={{marginRight: 5, marginTop: 14}}/>
             <Text key={s.name} style={[{lineHeight: 28}]}><Text style={styles.bold}>{s.name}</Text> - {s.age}
               годков</Text>
           </View>
         </View>
       </TouchableHighlight>
    )
  }
}

List.propTypes = {
  source: PropTypes.array.isRequired,
  showProfile: PropTypes.func
};

function filterByQuery(source, query) {
  return _.filter(source, function (item) {
    return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

module.exports = List;
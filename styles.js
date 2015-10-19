const {StyleSheet} = require('react-native');


const colors = {
  yellow: '#FFBE00'
};
const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  dev: {
    padding: 5,
    margin: 5,
    backgroundColor: 'rgba(255, 90, 0, .5)',
    borderWidth: 1,
    borderColor: '#00ff00',
  },
  item_style: {
    flexDirection: 'row',
    padding: 3,
    paddingLeft: 15,
    backgroundColor: 'green'
  },
  avatar: {
    width: 40,
    height: 40
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#FFBE00'
  },
  headerSegment: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    color: 'white'
  },
  screen: {
    flex: 1,
    alignSelf: 'stretch'
  },
  content: {
    marginTop: 64,
    flex: 1,
    alignSelf: 'stretch'
  },
  map: {
    //position: 'absolute',
    //top: 0,
    //left: 0,
    //right: 0,
    //bottom: 0,
    flex: 1,
    padding: 5,
    backgroundColor: 'blue',
  },
});

module.exports = styles
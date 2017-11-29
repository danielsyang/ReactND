import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  body: {
    height: 150,
    alignSelf: 'stretch',
    backgroundColor: '#ccccff',
  },
  titleView: {
    marginTop: 10,
  },
  titleText: {
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: '500',
    color: '#fff',
  },
  description: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

class CardComponent extends Component {
  render() {
    const { title, subtitle, navigation } = this.props
    return (
      <TouchableOpacity style={styles.body} onPress={() => navigation.navigate('IndividualCard',
        {
          name: title,
          subtitle: `${subtitle} cards`,
        })}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.description}>
          <Text>{subtitle} cards</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default CardComponent;
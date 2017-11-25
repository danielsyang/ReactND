import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View, 
  TouchableOpacity
} from 'react-native'

const styles = StyleSheet.create({
  body: {
    height: 150,
    width: 250,
    borderWidth: 1,
    borderColor: '#c6c6c6',
    borderRadius: 3,
  },
  titleView: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#c6c6c6',
  },
  titleText: {
    marginLeft: 10,
    marginBottom: 10,
  },
  description: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

class CardComponent extends Component {
  render() {
    const { title, subtitle } = this.props
    return (
      <TouchableOpacity style={styles.body}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.description}>
          <Text>{subtitle}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default CardComponent;
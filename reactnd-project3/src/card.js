import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  body: {
    height: 150,
    width: 150,    
  },
  content: {
    margin: 'auto',
  },
})

class CardComponent extends Component {
  render() {
    const { title, subtitle } = this.props
    return (
      <View style={styles.body}>
        <Text style={styles.content}>{title}</Text>
        <Text style={styles.content}>{subtitle}</Text>
      </View>
    )
  }
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default CardComponent;
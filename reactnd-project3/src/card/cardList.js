import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import CardComponent from './card'

const decks = [
  {
    title: 'udacicards',
    subtitle: '3 cards',
  }, {
    title: 'new deck',
    subtitle: '0 cards',
  }, {
    title: 'New deck 2',
    subtitle: '0 cards',
  },
]

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
})

class CardList extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        {decks.map((elem, index) => (
          <CardComponent title={elem.title} subtitle={elem.subtitle} key={index} navigation={navigation}/>
        ))}
      </View>
    )
  }
}

CardList.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default CardList;
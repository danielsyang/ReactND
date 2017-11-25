import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
})

class CardList extends Component {
  render() {
    return (
      <View style={styles.container}>
        {decks.map((elem, index) => (
          <CardComponent title={elem.title} subtitle={elem.subtitle} key={index} />
        ))}
      </View>
    )
  }

}

export default CardList;
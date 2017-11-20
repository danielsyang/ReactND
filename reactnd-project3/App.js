import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CardComponent from './src/card'

const styles = StyleSheet.create({
  container: {
  },
})

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

class App extends Component {
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

export default App
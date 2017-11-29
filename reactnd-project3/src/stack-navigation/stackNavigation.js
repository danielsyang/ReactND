import React from 'react'
import { StackNavigator } from 'react-navigation'

import CardList from '../card/cardList'
import CardIndividualView from '../card/cardIndividualView'

const Stack = StackNavigator({
  Home: {
    screen: CardList,
    navigationOptions: {
      title: 'Decks',
    },
  },
  IndividualCard: {
    screen: CardIndividualView,
    navigationOptions: param => ({
      title: `${param.navigation.state.params.name} Deck`
    })
  }
})

export default Stack

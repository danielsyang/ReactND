import React from 'react'
import { StackNavigator } from 'react-navigation'

import CardList from '../card/cardList'
import CardIndividual from '../card/cardIndividualView'

const Stack = StackNavigator({
  Home: {
    screen: CardList,
    navigationOptions: {
      title: 'Decks',
    },
  },
  Detail: {
    screen: CardIndividual,
  }
})

export default Stack

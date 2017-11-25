import React from 'react'
import { StackNavigator } from 'react-navigation'

import CardList from '../card/cardList'
import CardDetail from '../card/cardDetail'

const Stack = StackNavigator({
  Home: {
    screen: CardList,
    navigationOptions: {
      title: 'Decks',
    },
  },
  Detail: {
    screen: CardDetail,
  }
})

export default Stack

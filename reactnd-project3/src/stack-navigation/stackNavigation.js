import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'

import CardList from '../card/cardList'

const Stack = StackNavigator({
  Home: {
    screen: CardList,
    navigationOptions: {
      title: 'Decks',
    },
  },
})

export default Stack
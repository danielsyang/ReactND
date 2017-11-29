import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import CardComponent from './card'

const decks = [
  {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }

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
          <CardComponent title={elem.title} subtitle={elem.questions.length } key={index} navigation={navigation} />
        ))}
      </View>
    )
  }
}

CardList.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default CardList;
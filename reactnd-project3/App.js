import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CardComponent from './src/card/card'
import Stack from './src/stack-navigation/stackNavigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

class App extends Component {
  render() {    
    return (
      <View style={styles.container}>
        <Stack />        
      </View>
    )
  }
}

export default App
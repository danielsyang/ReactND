import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d6d7da',
  }
})

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Home View</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.container}>
        <Text style={styles.container}>To Dashboard</Text>
      </TouchableOpacity>
    </View>
  )
}

function Dashboard() {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}

const Stack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
})

export default Stack
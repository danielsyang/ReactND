import React, { Component } from 'react'
import { View, Text } from 'react-native'

class CardDetail extends Component {
  render() {
    return (
      <View>
        <Text>
          aosijdaois - {this.props.navigation.state.params.id}
        </Text>
      </View>
    )
  }
}

export default CardDetail
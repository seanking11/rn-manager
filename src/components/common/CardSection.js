import React from 'react'
import { View } from 'react-native'

const CardSection = ({ children }) => (
  <View style={styles.containerStyles}>
    {children}
  </View>
)

const styles = {
  containerStyles: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative'
  }
}

export default CardSection

import React, { Component } from 'react'
import { Text } from 'react-native'
import CardSection from './common/CardSection'

class ListItem extends Component {
  render() {
    const { name } = this.props.employee

    return (
      <CardSection>
        <Text style={styles.textStyle}>
          {name}
        </Text>
      </CardSection>
    )
  }
}

const styles = {
  textStyle: {
    paddingLeft: 15,
    fontSize: 18
  }
}

export default ListItem

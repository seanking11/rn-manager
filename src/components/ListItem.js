import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import CardSection from './common/CardSection'

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee })
  }

  render() {
    const { name } = this.props.employee

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.textStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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

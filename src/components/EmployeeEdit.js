import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Communcations from 'react-native-communications'
import { employeeUpdate, employeeSave } from '../actions'
import EmployeeForm from './EmployeeForm'
import CardSection from './common/CardSection'
import Card from './common/Card'
import Button from './common/Button'

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  onButtonPress() {
    const { name, phone, shift } = this.props
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }

  onTextPress() {
    const { name, phone, shift } = this.props
    Communcations.text(phone, `Hey, ${name}! Your upcoming shift is on ${shift}.`)
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text {this.props.name}
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit)

import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Communcations from 'react-native-communications'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import EmployeeForm from './EmployeeForm'
import CardSection from './common/CardSection'
import Card from './common/Card'
import Button from './common/Button'
import Confirm from './common/Confirm'

class EmployeeEdit extends Component {
  state = { showModal: false }

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

  onAccept() {
    const { uid } = this.props.employee
    this.props.employeeDelete({ uid })
  }

  onDecline() {
    this.setState({ showModal: false })
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

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire {this.props.name}
          </Button>
        </CardSection>

        <Confirm
          banana={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire this employee?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift }
}

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Input from './common/Input'
import Button from './common/Button'
import { emailChanged } from '../actions'

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            placeholder={'email@gmail.com'}
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label={'Password'}
            placeholder={'password'}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  email: state.auth.email
})

export default connect(mapStateToProps, { emailChanged })(LoginForm)

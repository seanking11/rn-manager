import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from './types'

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
})

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()
  console.log(name, phone, shift)
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => Actions.pop())
  }
}
